        /*Title: FIU Online Tuition Calculator
         *Author: mzootfb
         *Date: 4/24/2018 - 5/1/2018
         *Github: https://github.com/mzootfb
         */
        // Popovers from Bootsrap
        $(function() {
            $('[data-toggle="popover"]').popover()
        })
        $('.popover-dismiss').popover({
            trigger: 'focus'
        })
        $(function() {
         
        })

        //All noUiSlider js
        $(function() {

            var slider1 = document.getElementById('example_id1');
            var slider2 = document.getElementById('example_id2');
            var slider3 = document.getElementById('example_id3');

            noUiSlider.create(slider1, {
                start: [12],
                tooltips: wNumb({
                    decimals: 0
                }),
                step: 1,
                range: {
                    'min': [0],
                    'max': [18]
                }
            });
            noUiSlider.create(slider2, {
                start: [12],
                tooltips: wNumb({
                    decimals: 0
                }),
                step: 1,
                range: {
                    'min': [0],
                    'max': [18]
                }
            });
            noUiSlider.create(slider3, {
                start: [6],
                tooltips: wNumb({
                    decimals: 0
                }),
                step: 1,
                range: {
                    'min': [0],
                    'max': [18]
                }
            });

            slider1.setAttribute('disabled', true);
            slider2.setAttribute('disabled', true);
            slider3.setAttribute('disabled', true);
            // full/part/custom toggles
            document.getElementById("option1").addEventListener("click", function() {
                slider1.noUiSlider.set(12);
                slider2.noUiSlider.set(12);
                slider3.noUiSlider.set(6);
                document.getElementById('headtext').innerHTML = 'Full-Time';

            });
            document.getElementById("option2").addEventListener("click", function() {
                slider1.noUiSlider.set(6);
                slider2.noUiSlider.set(6);
                slider3.noUiSlider.set(3);
                document.getElementById('headtext').innerHTML = 'Part-Time';

            });

            var slider1val = document.getElementById('fall');
            var slider2val = document.getElementById('spring');
            var slider3val = document.getElementById('summer');
            var sliderttl = document.getElementById('ttlcredit');



            slider1.noUiSlider.on('update', function(values, handle) {
                slider1val.innerHTML = numeral(values[handle]).format('0,0');
                sliderttl.innerHTML = (Number(slider1.noUiSlider.get()) + Number(slider2.noUiSlider.get()) + Number(slider3.noUiSlider.get()));
            });
            slider1.noUiSlider.on('change', function(values, handle) {
                $(".btn-group > .btn").removeClass("active");
                $('#option3').addClass("active");
                document.getElementById('headtext').innerHTML = 'Custom';
            });
            slider2.noUiSlider.on('update', function(values, handle) {
                slider2val.innerHTML = numeral(values[handle]).format('0,0');
                sliderttl.innerHTML = (Number(slider1.noUiSlider.get()) + Number(slider2.noUiSlider.get()) + Number(slider3.noUiSlider.get()));


            });
            slider2.noUiSlider.on('change', function(values, handle) {
                $(".btn-group > .btn").removeClass("active");
                $('#option3').addClass("active");

            });
            slider3.noUiSlider.on('update', function(values, handle) {
                slider3val.innerHTML = numeral(values[handle]).format('0,0');
                sliderttl.innerHTML = (Number(slider1.noUiSlider.get()) + Number(slider2.noUiSlider.get()) + Number(slider3.noUiSlider.get()));

            });
            slider3.noUiSlider.on('change', function(values, handle) {
                $(".btn-group > .btn").removeClass("active");
                $('#option3').addClass("active");

            });

            function toggle(element) {

                // If the checkbox is checked, disabled the slider.
                // Otherwise, re-enable it.
                if ($('input[name=residency]:checked').length > 0) {
                    element.removeAttribute('disabled');
                } else {
                    element.setAttribute('disabled', true);
                }
            }
            checkboxes1.addEventListener('click', function() {
                $('#fallPop').popover('dispose'),
                    $('#sprPop').popover('dispose'),
                    $('#sumPop').popover('dispose'),
                    $('#btngrp').popover('dispose'),
                    $('#option1').removeAttr("disabled"),
                    $('#option2').removeAttr("disabled"),
                    $('#option3').removeAttr("disabled"),
                    toggle.call(this, slider1),
                    toggle.call(this, slider2),
                    toggle.call(this, slider3);
            });
        });
        //end slider


        //for the button toggle
        $(function() {

            $(".btn-group > .btn").click(function() {
                $(".btn-group > .btn").removeClass("active");
                $(this).addClass("active");

            });
        })


        //calculator
        $(function() {

            calculator = function() {
                var credits1;
                var credits2;
                var credits3;
                var credits;
                var diff = Number(52.29);
                var fee = Number(30);
                var multiplier = Number(1);
                var multi = Number(credits * multiplier);
                var differ = Number(credits * diff);
                var dfee = Number(fee * credits);
                var ttlcost = Number(((credits * multiplier) + (credits * multiplier) + (credits * fee)) + 10 + 93.69);
                var slider1 = document.getElementById('example_id1');
                var slider2 = document.getElementById('example_id2');
                var slider3 = document.getElementById('example_id3');
                var total1;
                var total2;
                var total3;
                var degree = Number(document.getElementById("degreeType").value);



                if (degree == 2) {
                    var graddeg = Number(document.getElementById("programSelect").value);
                    var programCost = "";
                    switch (graddeg) {
                        case 50:
                            programCost = "$18,300 for 36 Credit Hours"
                            break;
                        case 51:
                            programCost = "$25,000 for 30 Credit Hours"
                            break;
                        case 52:
                            programCost = "$25,000 for 30 Credit Hours"
                            break;
                        case 53:
                            programCost = "$31,200 (Hybrid)/ $36,000 (Fully Online) for 48 Credit Hours"
                            break;
                        case 54:
                            programCost = "$59,892 for 42 Credit Hours"
                            break;
                        case 55:
                            programCost = "$35,000 for 38 Credit Hours"
                            break;
                        case 56:
                            programCost = "$33,000 for 36 Credit Hours"
                            break;
                        case 57:
                            programCost = "$25,000 for 30 Credit Hours"
                            break;
                        case 58:
                            programCost = "$28,000 (In-state)/ $30,000 (Out-of-state) for 30 Credit Hours"
                            break;
                        case 59:
                            programCost = "$18,300 for 36 Credit Hours"
                            break;
                        default:
                            programCost = "$18,300 for 36 Credit Hours"
                    }


                    var title = document.getElementById('programSelect').options[document.getElementById('programSelect').selectedIndex].text;


                    document.getElementById("gradText").innerHTML = programCost,
                        document.getElementById("gradTitle").innerHTML = title;
                } else if (degree == 1) {



                    var radios = document.getElementsByName('residency');


                    for (var i = 0, length = radios.length; i < length; i++) {
                        if (radios[i].checked) {
                            document.getElementById("tableDiv").classList.remove("d-none");
                            // do whatever you want with the checked radio
                            var flres = radios[i].value;

                            // only one radio can be logically checked, don't check the rest
                            break;
                        }
                    }

                    if (flres == 1) {
                        multiplier = 130.42;
                    } else if (flres == 2) {
                        multiplier = 247.48;
                    }


                    slider1.noUiSlider.on('update', function(values, handle) {
                        credits1 = (Number(slider1.noUiSlider.get()));
                        credits2 = (Number(slider2.noUiSlider.get()));
                        credits3 = (Number(slider3.noUiSlider.get()));

                        document.getElementById('multitude1').innerHTML = numeral(Number(credits1 * multiplier)).format('$0,0.00');
                        document.getElementById('diff1').innerHTML = numeral(Number(credits1 * diff)).format('$0,0.00');
                        document.getElementById('fee1').innerHTML = numeral(Number(credits1 * fee)).format('$0,0.00');
                        total1 = Number(((credits1 * (multiplier + diff + fee)) + 10 + 93.69));
                        document.getElementById('total1').innerHTML = numeral(total1).format('$0,0.00');
                        document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('$0,0.00');


                    });
                    slider2.noUiSlider.on('update', function(values, handle) {
                        credits1 = (Number(slider1.noUiSlider.get()));
                        credits2 = (Number(slider2.noUiSlider.get()));
                        credits3 = (Number(slider3.noUiSlider.get()));


                        document.getElementById('multitude2').innerHTML = numeral(Number(credits2 * multiplier)).format('$0,0.00');
                        document.getElementById('diff2').innerHTML = numeral(Number(credits2 * diff)).format('$0,0.00');
                        document.getElementById('fee2').innerHTML = numeral(Number(credits2 * fee)).format('$0,0.00');
                        total2 = Number(((credits2 * (multiplier + diff + fee)) + 10 + 93.69));
                        document.getElementById('total2').innerHTML = numeral(total2).format('$0,0.00');
                        document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('$0,0.00');



                    });
                    slider3.noUiSlider.on('update', function(values, handle) {
                        credits1 = (Number(slider1.noUiSlider.get()));
                        credits2 = (Number(slider2.noUiSlider.get()));
                        credits3 = (Number(slider3.noUiSlider.get()));

                        document.getElementById('multitude3').innerHTML = numeral(Number(credits3 * multiplier)).format('$0,0.00');
                        document.getElementById('diff3').innerHTML = numeral(Number(credits3 * diff)).format('$0,0.00');
                        document.getElementById('fee3').innerHTML = numeral(Number(credits3 * fee)).format('$0,0.00');
                        total3 = Number(((credits3 * (multiplier + diff + fee)) + 10 + 93.69));
                        document.getElementById('total3').innerHTML = numeral(total3).format('$0,0.00');
                        document.getElementById('costSemester').innerHTML = numeral(total1 + total2 + total3).format('$0,0.00');



                    });
                }
            }
        });

        $(document).ready(function() {
            $('.droppy1').select2({
                minimumResultsForSearch: 6
            });

        });



        //enables the next dropdown
        function enableDegree() {
            $('.droppy2').select2({
                minimumResultsForSearch: 6
            });
            $("#degreeType").removeAttr("disabled");
            $('#selacad').popover('dispose')
        }
        //enables the next dropdown and hides/shows programs
        function enableProgram() {
            var degree = Number(document.getElementById("degreeType").value);
            //document.getElementById("testing").innerHTML = degree;
            $("#programSelect").removeAttr("disabled");
            $('#seldeg').popover('dispose')

        }
        //toggles programs
        function programToggle() {
            $('.droppy3').select2({
                minimumResultsForSearch: 6
            });
            var degree = Number(document.getElementById("degreeType").value);
            if (degree == 1) {
                    $("#gradCard").addClass("d-none"),
                    $("#ugradCard").removeClass("d-none"),
                    $('.g').attr("disabled", true),
                    $('.u').removeAttr("disabled"),
                    $(".droppy3").select2("destroy"),
                    $(".droppy3").select2(),
                    $("#programSelect").val('').trigger('change');
            } else if (degree == 2) {
                    $("#ugradCard").addClass("d-none"),
                    $("#gradCard").removeClass("d-none"),
                    $('.g').removeAttr("disabled"),
                    $('.u').attr("disabled", true),
                    $(".droppy3").select2("destroy"),
                    $(".droppy3").select2(),
                    $("#programSelect").val('').trigger('change');

            }
        }

           //A simple implement that integrates keystroke-triggered execution
        cheet('↑ ↑ ↓ ↓ ← → ← → b a enter', function () {
          alert('You unlocked: <<NOTHING TRY AGAIN LATER>>');
        });
