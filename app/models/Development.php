<?php

class SetDesign extends ModelsModel {

	protected $table = 'setdesign';

	public function photos()
	{
		return $this->hasMany( 'SetDesignPhotos', 'setdesign_id' );
	}

	public function cover()
	{
		return $this->hasOne('SetDesignPhotos', 'id');
	}

}
