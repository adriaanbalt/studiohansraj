@section('content')
<div id='details'>
<h2>{{ $name }}</h2>
<div class='information'>
	<p>Photographer: <span>{{ $Photographer }}</span></p>
</div>
<ul>
@foreach( $photos as $item )
	<li class='clearfix'>
		<a class='previousBtn' href='javascript:void(0);'>
			<img src="{{ URL::asset( $item->path ) }}"/>
		</a>
	</li>
@endforeach
	</ul>
</div>
@stop
