<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Carlos',
            'email' => 'carlos@gmail.com',
            'birthdate' => '1996-10-23',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Fany',
            'email' => 'fany@gmail.com',
            'birthdate' => '1996-10-23',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Bure',
            'email' => 'bure@gmail.com',
            'birthdate' => '1996-10-23',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Moni',
            'email' => 'moni@gmail.com',
            'birthdate' => '1996-10-23',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Angel',
            'email' => 'angel@gmail.com',
            'birthdate' => '1996-10-23',
            'password' => bcrypt('secret'),
        ]);
    }
}
