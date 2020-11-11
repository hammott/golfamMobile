import { keyframes , style} from '@angular/animations';


export const slideInRight = [
    style({transform:'translate3d(100%, 0, 0)', opacity: 0,   offset: 0}),
    style({transform:'translate3d(0, 0, 0)', opacity: 1, offset: 1})

]

export const slideOutRight = [

    style({transform:'translate3d(0, 0, 0)', opacity: 1, offset: 0}),
    style({transform:'translate3d(100%, 0, 0)', opacity: 0, offset: 1})

]