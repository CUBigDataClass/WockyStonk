import React, { Component } from 'react'

// Renders 2 x 2 grid on login page and register page 
class Grid extends React.Component {
    render() {
        return (
            <div> 
                
                <div className="iconCollectionContainer">
                <div className="tl iconCell">
                    <img
                    className="sizeIcon"
                    src="
                    https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_reddit-512.png
                        "
                    alt="andyHead"
                    />

                    <span className="input-text">See what Reddit is saying!</span>
                </div>
                <div className="tr iconCell">
                    <img
                    className="circle"
                    src="
                        data:image/png;base64,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
                        "
                    alt="andyHead"
                    />
                    <span className="input-text">See what Twitter is saying!</span>
                </div>
                <div className="bl iconCell">
                    <img
                    className="circle"
                    src="
                    https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Stock-512.png
                        "
                    alt="andyHead"
                    />
                    <span className="input-text"> Track and Analyze Stock History </span>
                </div>
                <div className="br iconCell">
                    <img
                    className="circle"
                    src="
                        https://s3-alpha-sig.figma.com/img/3084/e5ea/6c827e172f6f9871eb0708e08ee3ba87?Expires=1615766400&Signature=NBpvoFmN-6jLxMQ9MsklwHkVd1CZOifOuNrAtfIiUlYBG7HGS3gR-y10biJNo4QgnowxqzCFvQCfRB4ds5qddXkcLVwLAY4~VKd9zKACfEkvfD5QX0fBdwFvtoRy86n85GmKXlkaAmn150je8Y~IgrzzkJVRo6D7oRsMmsDcoEtoEsV~8F-5puzizzniVA3qgbnT92RE~sltXQkKRS1jXaHfQ8ThI3FnTsDOMjnhPDbz~yM1LF72WEfDkJl0CoDSreYt0uvOSgXbhAyzK3kWEbYCULEvRjcZA6OspVHsBGgwKMj12-i6P5i2YFFjfkTy~tPHOJXVD9f0-EQ0BMxiyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA
                        "
                    alt="andyHead"
                    />
                    <span className="input-text">Andy Head</span>
                </div>
                </div>
        </div>
        )
    }
}

export default Grid; 