<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('', function() {
    return "Mashup Music API";
});

Route::group(['as' => 'api', 'namespace' => 'API'], function () {
    // Users routes
    Route::get('users', 'UserController@index')->name('users');
    Route::get('users/{user}', 'UserController@show')->name('users.show');
    Route::post('users', 'UserController@store')->name('users.store');
    Route::put('users/{user}', 'UserController@update')->name('users.update');
    Route::delete('users/{user}', 'UserController@destroy')->name('users.delete');


});

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/