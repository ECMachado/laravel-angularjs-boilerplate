<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		DB::table('users')->truncate();

        User::create(array('email' => 'emanuel.c.machado@gmail.com', 'password' => Hash::make('emanuel666')));
	}

}