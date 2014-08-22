<div id='navigation' class='{{ $status }}'>
	<nav>
@foreach( $navigation as $item )
		<a href="/{{ $item['slug'] }}" class=''>
			<div class='valign'></div>
			<div class='item vcontent'>{{ $item['title'] }}</div>
		</a>
@endforeach
	</nav>
	<!--
	<div>
		<select id="searchbox" name="q" placeholder="Search products or categories..." class="form-control"></select>
	</div>
	-->
</div>