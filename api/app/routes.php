<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

header('Access-Control-Allow-Origin: http://localhost:9000');

Route::get('/', function()
{
	return View::make('hello');
});

Route::resource('api/things', 'UsersController');

Route::post('api/authentication/login', function() {
	if(Auth::attempt(array('email' => Input::json('email'), 'password' => Input::json('password'))))
    {
      return Response::json(array(Auth::user(), csrf_token()));
    } 
    else
    {
      return Response::json(array('flash' => 'Invalid username or password'), 500);
    }
});
