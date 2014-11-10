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
header('Access-Control-Allow-Headers: Authorization');

Route::get('/', function()
{
	return View::make('index');
});

Route::group(array('before' => 'auth'), function () {
	Route::resource('api/things', 'UsersController');
});

Route::post('auth/login', 'AuthController@login');

Route::get('/authTest', array('before' => 'auth', function () {
  return Auth::user();
}));
