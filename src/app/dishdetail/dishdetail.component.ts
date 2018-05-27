import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { visibility, expand } from '../app.animations';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [ visibility(), expand() ]
})
export class DishdetailComponent implements OnInit {

  visibility = 'shown';

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  errorMessage: string;

  commentForm: FormGroup;

  formErrors = { author: '', comment: '' };

  validationMessages = {
    author: {
      required: 'Author Name is required.',
      minlength: 'Author Name must be at least 2 characters long.'
    },
    comment: {
      required: 'Comment is required.'
    }
  };

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private baseURL: string
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.dishService.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);

    this.route.params
      .switchMap(params => {
        this.visibility = 'hidden';
        return this.dishService.getDish(+params['id'])
      })
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id);
        this.visibility = 'shown';
      },
      error => {
        this.dish = null;
        this.errorMessage = error;
      });
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [ Validators.required, Validators.minLength(2) ] ],
      rating: 5,
      comment: ['', [ Validators.required ] ]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) return;

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[field] = '';

      const control = this.commentForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] = messages[key];
          break;
        }
      }
    });
  }

  // Not using direct .save() because it requires typing my Dish as any.
  // I also refuse to use the dishcopy because it is not actually copying anything at all.
  onSubmitComment() {
    this.dish.comments.push({
      date: new Date().toISOString(),
      ...this.commentForm.value
    });
    this.dishService.save(this.dish)
      .subscribe(
        dish => this.dish = dish,
        error => {
          this.errorMessage = error;
          this.dish = null;
        }
      );
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: number) {
    const length = this.dishIds.length;
    const index = this.dishIds.indexOf(dishId);

    const prevIndex = (length + index - 1) % length;
    const nextIndex = (length + index + 1) % length;

    this.prev = this.dishIds[prevIndex];
    this.next = this.dishIds[nextIndex];
  }

}
