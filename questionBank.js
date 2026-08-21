export const tests=[
{id:1,title:'JEE Main Full Mock 01',exam:'JEE Main',questions:5,duration:180,difficulty:'Advanced',subjects:['Physics','Chemistry','Mathematics']},
{id:2,title:'JEE Physics Sprint',exam:'JEE Main',questions:5,duration:60,difficulty:'Medium',subjects:['Physics']},
{id:3,title:'NEET Full Mock 01',exam:'NEET',questions:5,duration:200,difficulty:'Medium',subjects:['Physics','Chemistry','Biology']},
{id:4,title:'SSC CGL Quant Practice',exam:'SSC CGL',questions:5,duration:30,difficulty:'Easy',subjects:['Quantitative Aptitude']}
];

export const questionBank=[
{testId:1,question:'A body starts from rest with constant acceleration 2 m/s². What is its velocity after 5 s?',options:['5 m/s','10 m/s','15 m/s','20 m/s'],answer:1,subject:'Physics',marks:4},
{testId:1,question:'If f(x)=x²+3x, then f′(x) is:',options:['x+3','2x+3','2x','x²'],answer:1,subject:'Mathematics',marks:4},
{testId:1,question:'The SI unit of electric current is:',options:['Volt','Ohm','Ampere','Watt'],answer:2,subject:'Physics',marks:4},
{testId:1,question:'Which particle carries a negative charge?',options:['Proton','Neutron','Electron','Photon'],answer:2,subject:'Chemistry',marks:4},
{testId:1,question:'Which quantity has both magnitude and direction?',options:['Mass','Speed','Velocity','Time'],answer:2,subject:'Physics',marks:4},
...Array.from({length:15},(_,i)=>({testId:2,question:`Physics practice question ${i+1}: Select the correct concept.`,options:['Option A','Option B','Option C','Option D'],answer:i%4,subject:'Physics',marks:4}))
];