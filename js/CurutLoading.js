(function($){
	$Cloading = function(){
		init();
		return $Cloading;
	};
	$Cloading.buka = function(){
		$("#Cloading").modal({backdrop: 'static'});
		return $Cloading.buka;
	};
	$Cloading.tutup = function(){
		$("#Cloading").modal('hide');
		return $Cloading.tutup;
	};
	$Cloading.waktu = function(detik){
		$("#Cloading").modal({backdrop: 'static'});
		var waktu = detik * 1000;
		setTimeout(function(){
			$("#Cloading").modal('hide');
		},waktu);
		return $Cloading.waktu;
	};
	$Cloading.sukses = function(w){
		
		if(w == null){
			sukses();
		}else{
			$Cloading.buka();
			var waktu = w * 1000;
			setTimeout(function(){
				sukses();
			},waktu);
		}
		return $Cloading.sukses;
	};
	function init(){
		var setting = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://rawcdn.githack.com/CurutDev/CurutLoading/8d81e08b7de5ae8e69e98c22d8cea387d9ea8f83/css/CurutLoading.css"> <link href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">';
		var html = '<div id="Cloading" class="modal fade"><div class="modal-dialog modal-confirm"><div class="modal-content warna-hijau" id="bgsukses"><div class="modal-header warna-hijau"><div class="" id="icon"></div></div><div class="modal-body text-center " id="bodymodal"><i class="spinner" id="icon2"></i> <h1>Loading</h1></div></div></div></div> ';
		$(document).find("body").append(html);
		$(document).find("head").append(setting);
	}
	function sukses(){
		var icon = document.getElementById("icon");
		var bg = document.getElementById("bodymodal");
		var sukses = document.getElementById("bgsukses");
		icon.classList.add("icon-box");
		icon.innerHTML='<i class="material-icons">&#xE876;</i>';
		sukses.classList.remove("warna-hijau");
		bg.innerHTML ='<h4>Sukses</h4><button class="btn btn-success" data-dismiss="modal"><span>Oke</span> <i class="material-icons">&#xE5C8;</i></button>';
		
	}
}(jQuery));
