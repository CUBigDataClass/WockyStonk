import React from 'react';
import '../styles/dashboardStyles/sideNavStyle.css';



function SideNav(){


    function handleOpen(){
        var x = document.getElementById('dropdown').style.width;
        if(x == "5vw"){
            document.getElementById('dropdown').style.width = 0;
        }
        else{
            document.getElementById('dropdown').style.width = "5vw"
        }
    }

    const image = "https://s3-alpha-sig.figma.com/img/3084/e5ea/6c827e172f6f9871eb0708e08ee3ba87?Expires=1616371200&Signature=Tq4mA6HZnUKJKRkE0MHMocnHtvs15sviKJ6IUDmpU41gQ2RCzQIEyvn6GSViPZaqtqlP4qG0zKz~b~erTf1aT-Os7ykCs7BLbqR9l8E5OjbcWwm~b0VPoVQOB9NuOyEuyDLUfB~KW5eHKe-Mg6OpXtnQ77RdPeIh13QMryvEsccv57n4q-wfSPwMkuF0-4K5zrHVRNGRg6LEr~-jBEISl3LkE3omzT4891tLm1ABERMqroxVT4MlHvHKb2kRBXkvJ1-OEBgvpizRST5cPyF7CZpSfKdMCG9ryzwZGVWDqra4TQLUNmhdgxEZ7jjU6SsNsy~5gcDNLWq4EXZaZU9H8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
    return(
        <section className="sideNav">
            <span onClick={handleOpen}>
                <img className="profile-pic" src={image} ></img>
            </span>

            <section id="dropdown">
                <section className='filler'> </section>
                <section className='stonk'></section>
            </section>
        </section>
    )
}

export default SideNav;