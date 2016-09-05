(function () {
	window.country.Region.forEach(function (region) {
		// append 省
		$('#dropDownChoice_Main').append('<option class=' + region.Name + ' value=' + region.Name + '>' + region.Name + '</option>');
		
		if (region.State.forEach) {
			region.State.forEach(function (state) {
				// append 市
				$('#dropDownChoice_Sub').append('<option class=' + region.Name + ' value=' + state.Name + '>' + state.Name + '</option>');
				
				// append 区县
				if (state.City && state.City.forEach) {
					state.City.forEach(function (city) {
						$('#dropDownChoice_2ndSub').append('<option class=' + state.Name + ' value=' + city.Name + '>' + city.Name + '</option>');
					});
				}
			});
		} else {
			// append 市
			$('#dropDownChoice_Sub').append('<option class=' + region.Name + ' value=' + region.State.Name + '>' + region.State.Name + '</option>');
			
			// append 区县
			region.State.City.forEach(function (city) {
				$('#dropDownChoice_2ndSub').append('<option class=' + region.State.Name + ' value=' + city.Name + '>' + city.Name + '</option>');
			});
		}
	});
})();