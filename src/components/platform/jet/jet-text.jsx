import React, { useContext, useState , useRef, useEffect } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { set, useForm } from "react-hook-form";
import LightStyles from "../../../assets/sass/light/jet/text.module.scss";
import DarkStyles from "../../../assets/sass/dark/jet/text.module.scss";
import ColorModeContext from "../../../context/color-mode-context";
import SendIcon from "../../../assets/svg/send";
import PlusIcon from "../../../assets/svg/plus";
import fa from "../../../lang/fa.json";

const mimeType = "audio/webm";


export default function JetText() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start function and state dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end function and state dropdown

  // start send chat
  const [input, setInput] = useState();

  const [message , setMessage] = useState([]);

  const handelChange = (e) => {
    setInput(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const id = message.length + 1;
    setMessage((prev) => [
      ...prev,
      {
        id: id,
        message: input,
        complete: false,
      },
    ]);
    setInput("");
  }
  // end send chat

  // start function and state scroll bottom in message
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [message]);
  // end function and state scroll bottom in message

  // start and fetch data image
  const [image , setImage] = useState();
  const [urlImage , setUrlImage] = useState([]);

  const handelImage = (e) => {
    setImage([...e.target.files])
  }
  // end and fetch data image

  // start function and fetch data in record voice
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [audioMp3 , setAudioMp3] = useState([]);

  const getMicrophonePermission = async () => {
      if ("MediaRecorder" in window) {
          try {
              const streamData = await navigator.mediaDevices.getUserMedia({
                  audio: true,
                  video: false,
              });
              setPermission(true);
              setStream(streamData);
          } catch (err) {
              alert(err.message);
          }
      } else {
          alert("The MediaRecorder API is not supported in your browser.");
      }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
       if (typeof event.data === "undefined") return;
       if (event.data.size === 0) return;
       localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
       const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
       const audioUrl = URL.createObjectURL(audioBlob);
       setAudio(audioUrl);
       setAudioChunks([]);

       setAudioMp3((prev) => [
         ...prev,
         {
           voice: audioUrl,
           complete: false,
         },
       ]);
    };

  };

  // end function and fetch data in record voice


  return (
    <Box sx={{ mt: 5, mb: 5 }} className={theme.palette.mode === "light" ? LightStyles.jet_text : DarkStyles.jet_text}>

      <div className={theme.palette.mode === "light" ? LightStyles.chat_left : DarkStyles.chat_left}>
        <p>
        سلام ، پویا رستمی هستم
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
       <span className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/2/4</span>
      </div>


      {message.map((m , index) => {
        if (m.message === undefined) {
          return null
        }if (m.message === '') {
          return null
        } else {   
          return (
            <div key={index} className={theme.palette.mode === "light" ? LightStyles.chat_right : DarkStyles.chat_right}>
              <p>{m.message}</p>
              <span className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/2/4</span>
            </div>
          );
        }
      })}

      
      {image?.map((i , index) => {
        return(
          <div key={index} className={theme.palette.mode === "light" ? LightStyles.chat_img : DarkStyles.chat_img}>
            <img src={URL.createObjectURL(i)} alt="" />
          </div>
        )
      })}

      {audioMp3.map((i , index) => {
        return(
          <div key={index}>
            <audio src={i.voice} controls></audio>
          </div>
        )
      })}




      <div className={theme.palette.mode === "light" ? LightStyles.send : DarkStyles.send}>
        <form onSubmit={handelSubmit} className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
          <IconButton onClick={handleClick} className={theme.palette.mode === "light" ? LightStyles.btn_item : DarkStyles.btn_item}>
            <PlusIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem className={theme.palette.mode === "light" ? LightStyles.item_menu : DarkStyles.item_menu}>
              <label htmlFor="image">
                {fa["Image online"]}
              </label>
              <input style={{ display:'none' }} id="image" type="file" accept="image" onChange={handelImage} multiple/>
            </MenuItem>
            <MenuItem className={theme.palette.mode === "light" ? LightStyles.item_menu : DarkStyles.item_menu}>
            {!permission ? (
                <p onClick={getMicrophonePermission}>
                  {fa["Get Microphone"]}
                </p>
              ) : null}
              {permission && recordingStatus === "inactive" ? (
                <p onClick={startRecording}>
                  {fa["Voice online"]}
                </p>
              ) : null}
              {recordingStatus === "recording" ? (
                <p onClick={stopRecording}>
                  {fa["Stop Recording"]}
                </p>
              ) : null}
            </MenuItem>
          </Menu>
          <input type="text" placeholder={fa["Note your text"]} value={input} onChange={handelChange} />
          <IconButton onClick={handelSubmit} className={theme.palette.mode === "light" ? LightStyles.btn_send : DarkStyles.btn_send}>
            <SendIcon />
          </IconButton>
        </form>
      </div>
      <div ref={bottomRef} />
    </Box>
  );
}
