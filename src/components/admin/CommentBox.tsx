import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import { AccordionActions } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Stack from "@mui/material/Stack";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ToggleButton from "@mui/material/ToggleButton";

const CommentBox = () => {
    
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <article className="w-[70%]  m-auto fixed bottom-8 left-[25%] opacity-90">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowUpwardIcon  />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Write your Message here !!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex justify-between">
            <ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
              className="scale-[0.8] relative right-5 bg-slate-200"
            >
              <ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon />
              </ToggleButton>
              <ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon />
              </ToggleButton>
              <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlinedIcon />
              </ToggleButton>
              <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Stack
              spacing={2}
              alignItems="center"
              className="scale-[0.9]  relative left-4 "
            >
              <ToggleButtonGroup
                {...control}
                aria-label="Small sizes"
                className="scale-[0.9] bg-slate-200"
              >
                {children}
              </ToggleButtonGroup>
            </Stack>
          </div>

          <textarea
            name=""
            id=""
            rows={4}
            className="p-4 border-2 border-gray-200 w-[100%]"
          ></textarea>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={() => alert("Message sent successfully ..!!")}>
            Send
          </Button>
        </AccordionActions>
      </Accordion>
    </article>
  );
};

export default CommentBox;
