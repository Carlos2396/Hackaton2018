<?php

use Illuminate\Database\Seeder;

class MashesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mashes')->insert([
            'name' => 'Incredible mashup',
            'start_datetime' => '2018/04/14 15:00',
            'quantum' => 24,
            'bpm' => 120,
            'key' => 'Do',
            'metre' => '3/4',
            'user_id' => 1,
            'snippet_id' => 1
        ]);

        DB::table('mashes')->insert([
            'name' => 'My mashup',
            'start_datetime' => '2018/04/14 12:00',
            'quantum' => 24,
            'bpm' => 160,
            'key' => 'Re',
            'metre' => '3/4',
            'user_id' => 2,
            'snippet_id' => 2
        ]);

        DB::table('mash_user')->insert([
            'user_id' => 4,
            'mash_id' => 1
        ]);

        DB::table('mash_user')->insert([
            'user_id' => 5,
            'mash_id' => 1
        ]);

        DB::table('mash_user')->insert([
            'user_id' => 5,
            'mash_id' => 2
        ]);
    }
}
