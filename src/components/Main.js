import React from 'react'

export default function Main(props) {

    return (
        <div className="content">
            <div className="flex-center position-ref full-height">
                <div className="mainContent">
                    <div className="title m-b-md">
                        MyWeather
                        <div className="subtitle">Your Weekly Forecast</div>

                            <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                                <label>Want somewhere different?</label>
                                <input type="text" className="regioninput" placeholder="Enter location.." onChange={(e) => { props.changeRegion(e.target.value) }} />
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

