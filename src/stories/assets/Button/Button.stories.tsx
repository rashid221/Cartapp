import {ComponentMeta } from '@storybook/react'; 
import  {Button}  from '../../Button';

const ButtonStory = {
    title:"My button"
}as ComponentMeta<typeof Button>

export default ButtonStory;

export const myprimaryButton = <Button theme="primary">Sign Up</Button>
export const mysecondaryButton = <Button theme="secondary">Login</Button>