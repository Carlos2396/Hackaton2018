<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mash extends Model
{
    static $keys = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];
    static $metres = ['3/4', '4/4', '6/8', '7/8', '5/4'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'start_datetime', 'quantum', 'bpm', 'key', 'metre', 'user_id'
    ];

    //Static methods
    public static function matchesKey($input)
    {
        foreach ($keys as $key)
        {
            if(strcmp($key, $input) == 0)
                return true;
        }
        return false;
    }

    public static function matchesMetre($input)
    {
        foreach ($metres as $metre)
        {
            if(strcmp($metre, $input) == 0)
                return true;
        }
        return false;
    }

    protected $dates = [
        'start_datetime'
    ];

    /**
     * Relations of Mash model
     */

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function users(){
        return $this->belongsToMany('App\User')->withTimestamps();
    }

    public function rounds(){
        return $this->hasMany('App\Round');
    }
}
