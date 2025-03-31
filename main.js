



    function getPrayerTimingsOfCity(cityName){
        let params = {

            country : 'SA',
            city : cityName 

        }
        fetch(`https://api.aladhan.com/v1/timingsByCity?country=${params.country}&city=${params.city}`)
        .then(response => response.json())
        .then(data =>{



            if(data.code == 200){


                let timings = data.data.timings
            
                FullTimePrayer("fajr",timings.Fajr)
                FullTimePrayer("sunrise",timings.Sunrise)
                FullTimePrayer("dhur",timings.Dhuhr)
                FullTimePrayer("asr",timings.Asr)
                FullTimePrayer("sunset",timings.Maghrib)
                FullTimePrayer("isha",timings.Isha)


                let readableDate = data.data.date.readable
                let weekday = data.data.date.hijri.weekday.ar

                document.getElementById('date').innerHTML= weekday + " " + readableDate  

            }else{

                console.error('Error fetching prayer timings:', data);
            }
            
            
        })
        .catch(error => console.error('Error:', error));
        

        function FullTimePrayer(id,time) {

            document.getElementById(id).innerHTML = time

        }

            
        
         
    }
    getPrayerTimingsOfCity('Ar Riyāḑ')


    let cities = [

        {
            arabicName: 'الريـــاض',
            name: 'Ar Riyāḑ'
        },
        {
            arabicName: 'القصيـــم',
            name: 'Al Qaşīm'
        },
        {
            arabicName: 'جازان',
            name: 'Jāzān'
        },
        {
            arabicName: 'تبـــوك',
            name: 'Tabūk'
        },
        {
            arabicName: 'مكة المكرمة',
            name: 'Makkah al Mukarramah'
        },
        {
            arabicName: 'الشرقيـــة',
            name: 'Ash Sharqīyah'
        },
        
        {
            arabicName: 'الجـــوف',
            name: 'Al Jawf'
        },
        {
            arabicName: 'نجـــران',
            name: 'Najrān'
        },
        {
            arabicName: 'حائـــل',
            name: "Ḩā'il"
        },
        {
            arabicName: 'الباحـــا',
            name: 'Al Bāḩah'
        }
    ]
    
    cities.forEach(element => {

        let content = `<option>${element.arabicName}</option>`
        
        document.getElementById('cities-select').innerHTML += content
        
        
    });

    document.getElementById('cities-select').addEventListener('change', function(index){
        let cityName = ""
        cities.forEach(element => {
            document.getElementById('city-name').innerHTML= this.value
           if(element.arabicName.trim() == this.value){

            cityName = element.name
           }
           

        });
        getPrayerTimingsOfCity(cityName)
        
    })


    


    



    
    

            

       


       

       


       
        
       
    
    