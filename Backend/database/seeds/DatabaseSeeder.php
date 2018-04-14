<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(InstrumentsTableSeeder::class);
        $this->call(SnippetsTableSeeder::class);
        $this->call(MashesTableSeeder::class);
        $this->call(RoundsTableSeeder::class);
    }
}
