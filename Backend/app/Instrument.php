<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instrument extends Model
{
    static $types = ['Brass', 'String', 'Woodwind', 'Percussion', 'Keyboard'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'type'
    ];

    //Static methods
    public static function matchesType($input)
    {
        foreach ($types as $type)
        {
            if(strcmp($type, $input) == 0)
                return true;
        }
        return false;
    }

    /**
     * Relations of User model
     */

    public function snippets(){
        return $this->hasMany('App\Snippet');
    }
}
