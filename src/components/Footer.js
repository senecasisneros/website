import React from 'react';
import {Grid, Nav, NavItem} from 'react-bootstrap';

function Footer(/*props*/) {
    return (
        <footer>
            <grid>
                <nav justified>
                    <navitem eventkey={1}>
                        Privacy policy
                    </navitem>
                    <navitem eventkey={2} title="Item">
                        Terms &amp; Conditions
                    </navitem>
                    <navitem eventkey={3}>
                        Some other professional link
                    </navitem>
                </nav>
                <div classname="text-center small copyright">
                    Copyright © Seneca Sisneros 2017
                </div>
            </grid>
        </footer>

    );
}

export default Footer;
