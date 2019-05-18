import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import AboutMeContent from './AboutMeContent';
import CreatedContent from './CreatedContent';
import ToolsContent from './ToolsContent';
import ContactContent from './ContactContent';

const styles = (theme:Theme): StyleRules => createStyles({
    mainMarkLayer: {
        [theme.breakpoints.between("sm","md")]: {
            overflow: "hidden"
        }
    }
});

type Props = WithStyles<typeof styles>;

class ContentLayer extends React.Component<Props>{

    render(){
        return(
            <div className={this.props.classes.mainMarkLayer}>
                <AboutMeContent />
                <CreatedContent />
                <ToolsContent />
                <ContactContent />
            </div>
        )
    }
}

export default withStyles(styles)(ContentLayer);
