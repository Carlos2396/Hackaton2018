<?php

use Illuminate\Database\Seeder;

class InstrumentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('instruments')->insert([
            'name' => 'Guitar',
            'type' => 'String'
        ]);

        DB::table('instruments')->insert([
            'name' => 'Piano',
            'type' => 'String'
        ]);

        DB::table('instruments')->insert([
            'name' => 'Battery',
            'type' => 'Percussion'
        ]);

        DB::table('instruments')->insert([
            'name' => 'Keyboard',
            'type' => 'Keyboard'
        ]);
    }
}
