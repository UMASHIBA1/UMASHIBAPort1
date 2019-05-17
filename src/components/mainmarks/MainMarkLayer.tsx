import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import AboutMe from './AboutMe';
import Created from './Created';
import Contact from './Contact';
import Tools from './Tools';

const styles = (theme:Theme): StyleRules => createStyles({
    mainMarkLayer: {
        [theme.breakpoints.between("sm","md")]: {
            overflow: "hidden"
        }
    }
});

type Props = WithStyles<typeof styles>;

class MainMarkLayer extends React.Component<Props>{

    render(){
        return(
            <div className={this.props.classes.mainMarkLayer}>
                <AboutMe />
                <Created />
                <Tools />
                <Contact />
            </div>
        )
    }
}

export default withStyles(styles)(MainMarkLayer);
