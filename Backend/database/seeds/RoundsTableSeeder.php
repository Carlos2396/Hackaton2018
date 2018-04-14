<?php

use Illuminate\Database\Seeder;

class RoundsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rounds')->insert([
            'num' => 1,
            'mash_id' => 1,
            'start_datetime' => '2018/04/14 15:00'
        ]);

        DB::table('rounds')->insert([
            'num' => 1,
            'mash_id' => 2,
            'start_datetime' => '2018/04/14 12:00'
        ]);

        DB::table('round_snippet')->insert([
            'start_time' => 10,
            'round_id' => 1,
            'snippet_id' => 3
        ]);

        DB::table('round_snippet')->insert([
            'start_time' => 5,
            'round_id' => 2,
            'snippet_id' => 4
        ]);

        DB::table('round_user')->insert([
            'user_id' => 4,
            'round_id' => 1,
            'snippet_id' => 3
        ]);

        DB::table('round_user')->insert([
            'user_id' => 5,
            'round_id' => 1,
            'snippet_id' => 3
        ]);

        DB::table('round_user')->insert([
            'user_id' => 5,
            'round_id' => 2,
            'snippet_id' => 4
        ]);
    }
}
