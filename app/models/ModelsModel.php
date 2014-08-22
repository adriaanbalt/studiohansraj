<?php

class ModelsModel extends Model {

	public function slug()
	{
		return $this->slug;
	}

	public function name()
	{
		return $this->name;
	}

	public function height()
	{
		return $this->height;
	}

	public function bust()
	{
		return $this->bust;
	}

	public function waist()
	{
		return $this->waist;
	}

	public function hips()
	{
		return $this->hips;
	}

	public function shoes()
	{
		return $this->shoes;
	}

	public function hair()
	{
		return $this->hair;
	}

	public function eyes()
	{
		return $this->eyes;
	}

}


/*
    $table->string('slug');

    $table->string('name');
    $table->string('height');
    $table->string('bust');
    $table->string('waist');
    $table->string('hips');
    $table->string('shoes');
    $table->string('hair');
    $table->string('eyes');
*/