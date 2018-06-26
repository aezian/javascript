function change(){

  var HYF08 = ['anas', 'anu', 'connie', 'ehsan', 'heratha', 'krishna rana', 'marco', 'sumon','rehman','sajid','samara','shiela','zeeshan','vignesh'];
  var qx = Math.floor(14*Math.random());
  var rx = Math.floor(14*Math.random());
  var sx = HYF08[qx];
  var tx = HYF08[rx];

if (sx!=tx) {
document.getElementById('demo1').innerHTML = tx+','+' '+sx;
      }
}

function display(){
  var HYF09 = ['anas', 'anu', 'connie', 'ehsan', 'heratha', 'krishna rana', 'marco', 'sumon','rehman','sajid','samara','shiela','zeeshan','vignesh'];
for(i=0;i<14;i++)
{
  document.getElementById('demo2').innerHTML += HYF09[i]+',';}
                 }
