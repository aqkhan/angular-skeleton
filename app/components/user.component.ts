import {Component} from '@angular/core';
import { PostService } from '../services/posts.service';

@Component ({
    moduleId: module.id;
    selector: 'user',
    templateUrl: 'views/user.componet.html',
    providers: [PostService]
})

export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    posts: any;

    constructor(private postService: PostService) {
        this.name = 'A Q Khan';
        this.email = 'aqk.neo@gmail.com ';
        // this.address.street = 'Street 2';
        // this.address.city = 'Abbottabad';
        // this.address.country = 'Pakistan';
        this.address = {
            street: 'Street 2',
            city: 'Abbottabad',
            country: 'Pakistan'
        };
        this.hobbies = ['Hobby 1', 'Hobby 2'];
        
        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    addHobbies(hobby) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i) {
        this.hobbies.splice(i, 1);
    }
}
interface address {
    street: string,
    city: string,
    country: string
}