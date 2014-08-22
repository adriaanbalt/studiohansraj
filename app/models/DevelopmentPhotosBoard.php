<?php

class SetDesignPhotosBoard extends Model {

	protected $table = 'setdesign_photos_board';

	public function model()
	{
		return $this->hasOne('SetDesign', 'id', 'setdesign_id');
	}

	public function cover()
	{
		return $this->hasOne('SetDesignPhotos', 'id', 'photo_id');
	}
}
