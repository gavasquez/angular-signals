import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interface';

@Component( {
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: [ './user-info-page.component.css' ]
} )
export class UserInfoPageComponent implements OnInit {
  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  private UserService = inject( UserService );
  public userId = signal<number>( 1 );
  public fullName = computed<string>( () => {
    if ( !this.currentUser() ) return 'Usuario no encontrado!';
    return `${ this.currentUser()!.first_name } ${ this.currentUser()!.last_name }`;
  } );

  public currentUser = signal<User | undefined>( undefined );
  public userWasFound = signal<boolean>( true );

  loadUser( id: number ) {
    if ( id <= 0 ) return;
    this.userId.set( id );
    this.currentUser.set( undefined );
    this.UserService.getUserById( id )
      .subscribe( {
        next: ( user ) => {
          this.currentUser.set( user );
          this.userWasFound.set( true );
        },
        error: () => {
          this.userWasFound.set( false );
          this.currentUser.set(undefined);
        }
      } );
  }

}
