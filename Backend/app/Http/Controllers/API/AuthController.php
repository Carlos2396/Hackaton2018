<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Login a user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:255|e-mail',
            'password' => 'required|max:100'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user = User::where('email', $request->email)->get()->first();

        if (Hash::check($request->password, $user->password))
        {
            $user->password = '';
            return response($user, 200); 
        }
        else{
            return response(["message", "The password is incorrect."], 400);
        }
    }
}
