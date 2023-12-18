import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, Textarea, TextareaInput } from "@gluestack-ui/themed"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postAdded } from "./postsSlice"

export default function AddPostForm() {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const dispatch = useDispatch()

    const onSavePostClicked = () => {
        if (title && content) {
          dispatch(
            postAdded({
              id: Math.random(),
              title,
              content
            })
          )
        }
      }
      
    return(
        <Box>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Title</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField type="text" defaultValue={title} onChange={onTitleChanged}></InputField>
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Content</FormControlLabelText>
                </FormControlLabel>
                <Textarea>
                    <TextareaInput defaultValue={content} onChange={onContentChanged}></TextareaInput>
                </Textarea>
                <Button onPress={onSavePostClicked}>
                    <ButtonText>Add New</ButtonText>
                </Button>
            </FormControl>

            
        </Box>
    )
}