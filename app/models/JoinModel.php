<?php

class JoinModel extends Model {

	protected $table = 'join';

	public function first_name()
	{
		return $this->telephone;
	}

	public function last_name()
	{
		return $this->fax;
	}

	public function address()
	{
		return $this->email;
	}

	public function apt()
	{
		return $this->apt;
	}

	public function city()
	{
		return $this->city;
	}

	public function state()
	{
		return $this->state;
	}

	public function country()
	{
		return $this->country;
	}
	
	public function zipcode()
	{
		return $this->zipcode;
	}

	public function telephone()
	{
		return $this->telephone;
	}

	public function email()
	{
		return $this->email;
	}

	public function gender()
	{
		return $this->gender;
	}

	public function birthday()
	{
		return $this->birthday;
	}

	public function comments()
	{
		return $this->comments;
	}

	public function picture()
	{
		return $this->picture;
	}

}

