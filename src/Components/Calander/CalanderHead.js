import React from 'react';
import styles from './Calander.css';

export default function CalanderHead(props){
    return (
        <div className="calander-heading">
                    <div>
                        <div className="calander-button-tab">
                            Today
                        </div>
                    </div>
                    <div>
                        <div className="calander-button-nav">
                            
                                <span className="prev">&#10094;</span>
                                <span className="next">&#10095;</span>
                        </div>
                    </div>
                    <div>
                        <div className="calander-heading-text">
                            July 2019
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <div className="calander-button-tab">
                            Day
                        </div>
                        <div className="calander-button-tab">
                            Week
                        </div>
                        <div className="calander-button-tab">
                            Month
                        </div>
                    </div>
                </div>
    )
}