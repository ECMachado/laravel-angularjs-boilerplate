<?php

use GuzzleHttp\Subscriber\Oauth\Oauth1;

class AuthController extends \BaseController {

	public function login()
    {
        $email = Input::get('email');
        $password = Input::get('password');
        $user = User::where('email', '=', $email)->first();
        if (!$user)
        {
            return Response::json(array('message' => 'Wrong email and/or password'), 401);
        }
        if (Hash::check($password, $user->password))
        {
            // The passwords match...
            unset($user->password);
            return Response::json(array('token' => $this->createToken($user)));
        }
        else
        {
            return Response::json(array('message' => 'Wrong email and/or password'), 401);
        }
    }

}