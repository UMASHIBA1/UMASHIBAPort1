import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import AboutMeContent from './AboutMeContent';
import CreatedContent from './CreatedContent';
import ToolsContent from './ToolsContent';
import ContactContent from './ContactContent';
import { reduxState } from '../../types/redux/reducer';
import { connect } from 'react-redux';

const styles = (theme:Theme): StyleRules => createStyles({
    mainMarkLayer: {
        [theme.breakpoints.between("sm","md")]: {
            overflow: "hidden"
        }
    }
});

const mapStateToProps = (state:reduxState) =>({
    AboutMeContent: Object.assign({},state.aboutMeContentProps),
    CreatedContent: Object.assign({},state.createdContentProps),
    ToolsContent: Object.assign({},state.toolsContentProps),
    ContactContent: Object.assign({},state.contactContentProps)
})

type Props = WithStyles<typeof styles> & ReturnType<typeof mapStateToProps>;

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

export default connect(mapStateToProps)(withStyles(styles)(ContentLayer));
