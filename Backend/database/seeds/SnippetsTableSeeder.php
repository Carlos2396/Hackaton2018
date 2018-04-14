<?php

use Illuminate\Database\Seeder;

class SnippetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('snippets')->insert([
            'name' => 'Guitar snippet for incredible mash',
            'path' => 'path',
            'user_id' => 1,
            'instrument_id' => 1,
        ]);

        DB::table('snippets')->insert([
            'name' => 'Piano snippet for incredible mash',
            'path' => 'path',
            'user_id' => 2,
            'instrument_id' => 2,
        ]);

        DB::table('snippets')->insert([
            'name' => 'Battery snippet for incredible mash',
            'path' => 'path',
            'user_id' => 3,
            'instrument_id' => 3,
        ]);

        DB::table('snippets')->insert([
            'name' => 'Keyboard snippet for incredible mash',
            'path' => 'path',
            'user_id' => 3,
            'instrument_id' => 4,
        ]);
    }
}
