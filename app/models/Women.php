<?php

class Sculpture extends ModelsModel {

	protected $table = 'sculpture';

	public function photos()
	{
		return $this->hasMany( 'SculpturePhotos', 'sculpture_id' );
	}

	public function cover()
	{
		return $this->hasOne('SculpturePhotos', 'id');
	}

}
