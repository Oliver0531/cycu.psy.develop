import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import $ from "jquery";

import moment from "moment";

const right = "#CEFFCE";
const wrong = "#FF9797";

const returnLevelOne = (section) => {
  let levelOne = "";
  switch (section) {
    case 1:
      levelOne = "activity";
      break;
    case 2:
      levelOne = "reaction";
      break;
    case 3:
      levelOne = "attention";
      break;
  }
  return levelOne;
};

const returnLevelTwo = (number) => {
  let levelTwo = "";
  switch (number) {
    case 1:
      levelTwo = "one";
      break;
    case 2:
      levelTwo = "two";
      break;
    case 3:
      levelTwo = "three";
      break;
  }
  return levelTwo;
};

const Form = () => {
  const [view, setView] = useState("default");
  const [advice, setAdvice] = useState("");
  const [motherName, setMotherName] = useState("");
  const [childName, setChildName] = useState("");
  const [recording, setRecording] = useState({
    activity: {
      isHigh: "Y",
      ans: {
        one: null,
        two: null,
        three: null,
      },
    },
    reaction: {
      isHigh: "Y",
      ans: {
        one: null,
        two: null,
        three: null,
      },
    },
    attention: {
      isHigh: "Y",
      ans: {
        one: null,
        two: null,
        three: null,
      },
    },
  });

  const [defaultError, setDefaultError] = useState(false);

  const recordSection = (section, value) => {
    let levelOne = returnLevelOne(section);
    const temp = recording;
    temp[levelOne]["isHigh"] = value;
    setRecording({ ...temp });
  };

  const submitQuestion = (section) => {
    let levelOne = returnLevelOne(section);
    if (recording[levelOne]["isHigh"] === "Y") {
      setView(`${levelOne}${recording[levelOne]["isHigh"]}Detail`);
    } else {
      setView(`${levelOne}${recording[levelOne]["isHigh"]}Detail`);
    }
  };

  const record = (section, number, value) => {
    const temp = recording;
    let levelOne = returnLevelOne(section);
    let levelTwo = returnLevelTwo(number);

    temp[levelOne]["ans"][levelTwo] = value;
    setRecording({ ...temp });
  };

  const Default = () => {
    const defaultNext = () => {
      if (motherName === "" || childName === "") {
        setDefaultError(true);
      } else {
        setDefaultError(false);
        setView("QOne");
      }
    };
    return (
      <Fragment>
        <div className="title" style={{ fontSize: 20 }}>
          學齡前兒童之氣質基礎的母親預期指導成效：一般兒童與自閉症類群障礙症兒童
        </div>
        <div className="error">{defaultError ? "請輸入必填欄位*" : null}</div>

        <TextField
          label="母親姓名*"
          placeholder="Placeholder"
          helperText="必填"
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          style={{ fontSize: 12 }}
          variant="outlined"
          onChange={(e) => setMotherName(e.target.value)}
        />
        <TextField
          label="孩子姓名*"
          placeholder="Placeholder"
          helperText="必填"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(e) => setChildName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={defaultNext}
        >
          下一步
        </Button>
      </Fragment>
    );
  };

  const [questionOneError, setQuestionOneError] = useState(false);
  const questionOneNext = () => {
    if (recording.activity.isHigh === null) {
      setQuestionOneError(true);
    } else {
      setQuestionOneError(false);
      submitQuestion(1);
    }
  };
  const [questionTwoError, setQuestionTwoError] = useState(false);
  const questionTwoNext = () => {
    if (recording.reaction.isHigh === null) {
      setQuestionTwoError(true);
    } else {
      setQuestionTwoError(false);
      submitQuestion(2);
    }
  };
  const [questionThreeError, setQuestionThreeError] = useState(false);
  const questionThreeNext = () => {
    if (recording.attention.isHigh === null) {
      setQuestionThreeError(true);
    } else {
      setQuestionThreeError(false);
      submitQuestion(3);
    }
  };
  const QuestionOne = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第二週-活動量
        </div>
        <div className="error">
          {questionOneError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子活動量為*</FormLabel>
          <RadioGroup
            aria-label="activity"
            name="activity"
            value={recording.activity.isHigh}
            onChange={(e) => recordSection(1, e.target.value)}
          >
            <FormControlLabel
              value="Y"
              control={<Radio color="primary" />}
              label="高"
            />
            <FormControlLabel
              value="N"
              control={<Radio color="primary" />}
              label="低"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionOneNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionTwo = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第二週-反應強度
        </div>
        <div className="error">
          {questionTwoError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子反應強度為*</FormLabel>
          <RadioGroup
            aria-label="reaction"
            name="reaction"
            value={recording.reaction.isHigh}
            onChange={(e) => recordSection(2, e.target.value)}
          >
            <FormControlLabel
              value="Y"
              control={<Radio color="primary" />}
              label="高"
            />
            <FormControlLabel
              value="N"
              control={<Radio color="primary" />}
              label="低"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionTwoNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionThree = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第二週-注意力分散度
        </div>
        <div className="error">
          {questionThreeError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子注意力分散度為*</FormLabel>
          <RadioGroup
            aria-label="attention"
            name="attention"
            value={recording.attention.isHigh}
            onChange={(e) => recordSection(3, e.target.value)}
          >
            <FormControlLabel
              value="Y"
              control={<Radio color="primary" />}
              label="高"
            />
            <FormControlLabel
              value="N"
              control={<Radio color="primary" />}
              label="低"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionThreeNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const [questionOneDetailError, setQuestionOneDetailError] = useState(false);

  const questionOneDetailNext = () => {
    if (
      recording.activity.ans.one === null ||
      recording.activity.ans.two === null ||
      recording.activity.ans.three === null
    ) {
      setQuestionOneDetailError(true);
    } else {
      setQuestionOneDetailError(false);
      setView("QTwo");
    }
  };

  const [questionTwoDetailError, setQuestionTwoDetailError] = useState(false);

  const questionTwoDetailNext = () => {
    if (
      recording.reaction.ans.one === null ||
      recording.reaction.ans.two === null ||
      recording.reaction.ans.three === null
    ) {
      setQuestionTwoDetailError(true);
    } else {
      setQuestionTwoDetailError(false);
      setView("QThree");
    }
  };

  const [questionThreeDetailError, setQuestionThreeDetailError] = useState(
    false
  );

  const questionThreeDetailNext = () => {
    if (
      recording.attention.ans.one === null ||
      recording.attention.ans.two === null ||
      recording.attention.ans.three === null
    ) {
      setQuestionThreeDetailError(true);
    } else {
      setQuestionThreeDetailError(false);
      const data = {
        date: moment().format("YYYY-MM-DD"),
        mother: motherName,
        child: childName,
        activityOne: recording.activity.ans.one,
        activityTwo: recording.activity.ans.two,
        activityThree: recording.activity.ans.three,
        reactionOne: recording.reaction.ans.one,
        reactionTwo: recording.reaction.ans.two,
        reactionThree: recording.reaction.ans.three,
        attentionOne: recording.attention.ans.one,
        attentionTwo: recording.attention.ans.two,
        attentionThree: recording.attention.ans.three,
        advice: advice,
      };

      $.ajax({
        type: "get",
        url:
          "https://script.google.com/macros/s/AKfycby8yvJclOyVuh8udD0W56K0GQn2GoX_N9cUJOYXe1unaf0MMv8E/exec",
        data: data,
        dataType: "JSON",
        success: function (response) {
          console.log("scucess");
        },
      });
      setView("seeResult");
    }
  };

  const QuestionOneYDetail = () => {
    return (
      <div>
        <div>第二週-復原力型</div>
        <div className="error">
          {questionOneDetailError ? "請選擇必選欄位" : ""}
        </div>
        <ul>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                復原力型的孩子時常表現出正向的情緒，較願意親近他人，也較能專注與投入在任務當中。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.activity.ans.one}
              onChange={(e) => record(1, 1, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                復原力型的孩子在各方面能力都比較好，所以這種孩子的父母可以完全不用花心思在教養上。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.activity.ans.two}
              onChange={(e) => record(1, 2, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                復原力型的孩子能夠很快的嘗試一項活動，但也因此容易遇到危險，可透過與孩子討論、說故事，或角色扮演，以提升孩子的警覺心。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="three"
              name="three"
              value={recording.activity.ans.three}
              onChange={(e) => record(1, 3, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionOneDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionOneNDetail = () => {
    return (
      <div>
        <div>第二週-活動量低</div>
        <div className="error">
          {questionOneDetailError ? "請選擇必選欄位" : ""}
        </div>
        <ul>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                活動量太低的孩子，做事情常常太懶、太慢，所以活動量低就是不好的氣質*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.activity.ans.one}
              onChange={(e) => record(1, 1, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                對於活動量較低的孩子，父母除了要提供增進動作發展活動的機會，讓孩子嘗試探索、練習，自身亦可投入體能活動*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.activity.ans.two}
              onChange={(e) => record(1, 2, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                針對活動量低的孩子，可以多鼓勵但不強迫孩子進行動態活動，若只是一昧地強迫孩子運動，只會讓孩子更加反感，反而更討厭參與動態活動*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="three"
              name="three"
              value={recording.activity.ans.three}
              onChange={(e) => record(1, 3, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionOneDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionTwoYDetail = () => {
    return (
      <div>
        <div>第二週-無法控制型</div>
        <div className="error">
          {questionTwoDetailError ? "請選擇必選欄位" : ""}
        </div>
        <ul>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                無法控制型氣質的孩子非常讓父母感到困擾，因為他就是「有問題的孩子」以及「麻煩製造者」。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.reaction.ans.one}
              onChange={(e) => record(2, 1, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                對於無法控制型氣質的孩子，雖然教養上會讓父母較為辛苦，但父母若能理解孩的特性，適度接納與引導，親子之間就易建立起可促使孩子身心潛能順利發展的親密依附關係。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.reaction.ans.two}
              onChange={(e) => record(2, 2, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                父母應試著讓自己找到無法控制型孩子的優點，並協助孩子塑造正向的因應與社交策略。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="three"
              name="three"
              value={recording.reaction.ans.three}
              onChange={(e) => record(2, 3, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionTwoDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionTwoNDetail = () => {
    return (
      <div>
        <div>第二週-反應強度低</div>
        <div className="error">
          {questionTwoDetailError ? "請選擇必選欄位" : ""}
        </div>
        <ul>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                是指孩子說話、哭鬧的聲音，或是表現快樂或煩躁的情緒時，反應是強烈或溫和。
                所以反應強度低就是不好的氣質。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.reaction.ans.one}
              onChange={(e) => record(2, 1, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                當孩子表現出微弱的情緒反應時，在確保孩子的行為符合安全、合宜的狀況下，家長應先敏於覺察與理解孩子的情緒，避免忽略孩子的情緒反應。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.reaction.ans.two}
              onChange={(e) => record(2, 2, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                引導孩子說出自己的感受，並提醒孩子考慮周遭環境，以免因為情緒強度過弱而引起他人的無視。也多鼓勵孩子以多元方式呈現與表達情緒，避免過於侷限而造成過弱的情緒反應。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="three"
              name="three"
              value={recording.reaction.ans.three}
              onChange={(e) => record(2, 3, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionTwoDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionThreeYDetail = () => {
    return (
      <div>
        <div>第二週-過度控制型</div>
        <div className="error">
          {questionThreeDetailError ? "請選擇必選欄位" : ""}
        </div>
        <ul>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                過度控制型的孩子的活動量較低、負向情感及主動控制較高。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.attention.ans.one}
              onChange={(e) => record(3, 1, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                父母可適時的緩和過度控制型的孩子，因過度自律而引起的負向情緒，也讓孩子知道，適時的求助、請教他人，也都是問題解決的各種方法。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.attention.ans.two}
              onChange={(e) => record(3, 2, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                過度控制型的孩子容易退縮，一定要強迫或催促孩子主動參與活動，否則孩子會過於退縮。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="three"
              name="three"
              value={recording.attention.ans.three}
              onChange={(e) => record(3, 3, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>
        </ul>
        <label>針對本週的氣質資訊，有什麼有要回饋的呢？</label>
        <textarea
          style={{
            width: "100%",
            height: 80,
            margin: "12px 0",
            resize: "none",
            borderRadius: 5,
          }}
          onChange={(event) => setAdvice(event.target.value)}
        ></textarea>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionThreeDetailNext}
        >
          看測驗結果
        </Button>
      </div>
    );
  };

  const QuestionThreeNDetail = () => {
    return (
      <div>
        <div>第二週-注意力分散度低</div>
        <div className="error">
          {questionThreeDetailError ? "請選擇必選欄位" : ""}
        </div>
        <ul>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                注意力較專注、不易受到外界干擾的孩子，可以投入在他所進行事物上，但是這種孩子有時會因為太過投入，因而忽略周遭重要的訊息。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.attention.ans.one}
              onChange={(e) => record(3, 1, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                為了讓孩子能關注周遭事物，一旦孩子沒回應，就要用越大聲越好的斥責方式，才能讓孩子不再過於專注。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.attention.ans.two}
              onChange={(e) => record(3, 2, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>

          <Divider style={{ margin: "15px 0" }} />
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <li
                style={{
                  listStyleType: "decimal-leading-zero",
                  margin: "10px 0",
                }}
              >
                對注意力較專注的孩子，應多提醒孩子注意環境中的外在刺激與訊息，以免過於專注，導致錯失其他重要的學習與互動。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="three"
              name="three"
              value={recording.attention.ans.three}
              onChange={(e) => record(3, 3, e.target.value)}
            >
              <FormControlLabel
                value="Y"
                control={<Radio color="primary" />}
                label="是"
              />
              <FormControlLabel
                value="N"
                control={<Radio color="primary" />}
                label="否"
              />
            </RadioGroup>
          </FormControl>
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionThreeDetailNext}
        >
          看測驗結果
        </Button>
      </div>
    );
  };

  const Result = () => {
    const res = recording;
    // const res = {
    //   activity: {
    //     isHigh: "N",
    //     ans: {
    //       one: "Y",
    //       two: "N",
    //       three: "N",
    //     },
    //   },
    //   reaction: {
    //     isHigh: "N",
    //     ans: {
    //       one: "N",
    //       two: "Y",
    //       three: "Y",
    //     },
    //   },
    //   attention: {
    //     isHigh: "N",
    //     ans: {
    //       one: "N",
    //       two: "Y",
    //       three: "N",
    //     },
    //   },
    // };
    return (
      <div>
        <div>測驗結果</div>
        {res.activity.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-復原力型</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    復原力型的孩子時常表現出正向的情緒，較願意親近他人，也較能專注與投入在任務當中。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.activity.ans.one}
                  onChange={(e) => record(1, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.activity.ans.one === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.activity.ans.one === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    復原力型的孩子在各方面能力都比較好，所以這種孩子的父母可以完全不用花心思在教養上。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.activity.ans.two}
                  onChange={(e) => record(1, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.activity.ans.two === "Y"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.activity.ans.two === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    復原力型的孩子能夠很快的嘗試一項活動，但也因此容易遇到危險，可透過與孩子討論、說故事，或角色扮演，以提升孩子的警覺心。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="three"
                  name="three"
                  value={res.activity.ans.three}
                  onChange={(e) => record(1, 3, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.activity.ans.three === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.activity.ans.three === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>

            <Divider style={{ margin: "15px 0" }} />
          </Fragment>
        ) : (
          <Fragment>
            <div>第二週-活動量低</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    活動量太低的孩子，做事情常常太懶、太慢，所以活動量低就是不好的氣質
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.activity.ans.one}
                  onChange={(e) => record(1, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.activity.ans.one === "Y"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.activity.ans.one === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    對於活動量較低的孩子，父母除了要提供增進動作發展活動的機會，讓孩子嘗試探索、練習，自身亦可投入體能活動
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.activity.ans.two}
                  onChange={(e) => record(1, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.activity.ans.two === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.activity.ans.two === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    針對活動量低的孩子，可以多鼓勵但不強迫孩子進行動態活動，若只是一昧地強迫孩子運動，只會讓孩子更加反感，反而更討厭參與動態活動
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="three"
                  name="three"
                  value={res.activity.ans.three}
                  onChange={(e) => record(1, 3, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.activity.ans.three === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.activity.ans.three === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>
          </Fragment>
        )}
        <Divider style={{ margin: "15px 0" }} />
        {res.reaction.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-無法控制型</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    無法控制型氣質的孩子非常讓父母感到困擾，因為他就是「有問題的孩子」以及「麻煩製造者」。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.reaction.ans.one}
                  onChange={(e) => record(2, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.reaction.ans.one === "Y"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.reaction.ans.one === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    對於無法控制型氣質的孩子，雖然教養上會讓父母較為辛苦，但父母若能理解孩的特性，適度接納與引導，親子之間就易建立起可促使孩子身心潛能順利發展的親密依附關係。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.reaction.ans.two}
                  onChange={(e) => record(2, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.reaction.ans.two === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.reaction.ans.two === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    父母應試著讓自己找到無法控制型孩子的優點，並協助孩子塑造正向的因應與社交策略。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="three"
                  name="three"
                  value={res.reaction.ans.three}
                  onChange={(e) => record(2, 3, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.reaction.ans.three === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.reaction.ans.three === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <div>第二週-反應強度低</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    是指孩子說話、哭鬧的聲音，或是表現快樂或煩躁的情緒時，反應是強烈或溫和。
                    所以反應強度低就是不好的氣質。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.reaction.ans.one}
                  onChange={(e) => record(2, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.reaction.ans.one === "Y"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.reaction.ans.one === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    當孩子表現出微弱的情緒反應時，在確保孩子的行為符合安全、合宜的狀況下，家長應先敏於覺察與理解孩子的情緒，避免忽略孩子的情緒反應。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.reaction.ans.two}
                  onChange={(e) => record(2, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.reaction.ans.two === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.reaction.ans.two === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    引導孩子說出自己的感受，並提醒孩子考慮周遭環境，以免因為情緒強度過弱而引起他人的無視。也多鼓勵孩子以多元方式呈現與表達情緒，避免過於侷限而造成過弱的情緒反應。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="three"
                  name="three"
                  value={res.reaction.ans.three}
                  onChange={(e) => record(2, 3, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.reaction.ans.three === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.reaction.ans.three === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>
          </Fragment>
        )}

        <Divider style={{ margin: "15px 0" }} />

        {res.attention.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-過度控制型</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    過度控制型的孩子的活動量較低、負向情感及主動控制較高。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.attention.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.attention.ans.one === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.attention.ans.one === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    父母可適時的緩和過度控制型的孩子，因過度自律而引起的負向情緒，也讓孩子知道，適時的求助、請教他人，也都是問題解決的各種方法。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.attention.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.attention.ans.two === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.attention.ans.two === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    過度控制型的孩子容易退縮，一定要強迫或催促孩子主動參與活動，否則孩子會過於退縮。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="three"
                  name="three"
                  value={res.attention.ans.three}
                  onChange={(e) => record(3, 3, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.attention.ans.three === "Y"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.attention.ans.three === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <div>第二週-注意力分散度低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    注意力較專注、不易受到外界干擾的孩子，可以投入在他所進行事物上，但是這種孩子有時會因為太過投入，因而忽略周遭重要的訊息。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.attention.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.attention.ans.one === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.attention.ans.one === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    為了讓孩子能關注周遭事物，一旦孩子沒回應，就要用越大聲越好的斥責方式，才能讓孩子不再過於專注。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.attention.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.attention.ans.two === "Y"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.attention.ans.two === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>

              <Divider style={{ margin: "15px 0" }} />
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    對注意力較專注的孩子，應多提醒孩子注意環境中的外在刺激與訊息，以免過於專注，導致錯失其他重要的學習與互動。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="three"
                  name="three"
                  value={res.attention.ans.three}
                  onChange={(e) => record(3, 3, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.attention.ans.three === "Y"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio color="primary" />}
                    label="否"
                    disabled
                    style={
                      res.attention.ans.three === "N"
                        ? { margin: "5px 0px", background: wrong }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>
          </Fragment>
        )}
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={reload}
        >
          重新測驗
        </Button>
      </div>
    );
  };

  const reload = () => {
    window.location.reload();
  };
  const Show = () => {
    switch (view) {
      case "default":
        return Default();
        break;
      case "stepOne":
        return QuestionOne();
        break;
      case "QOne":
        return QuestionOneYDetail();
        break;
      case "activityNDetail":
        return QuestionOneNDetail();
        break;
      case "stepTwo":
        return QuestionTwo();
        break;
      case "QTwo":
        return QuestionTwoYDetail();
        break;
      case "reactionNDetail":
        return QuestionTwoNDetail();
        break;
      case "stepThree":
        return QuestionThree();
        break;
      case "QThree":
        return QuestionThreeYDetail();
        break;
      case "attentionNDetail":
        return QuestionThreeNDetail();
        break;
      case "seeResult":
        window.scrollTo(0, 0);
        return Result();
        break;
    }
  };
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            margin: "auto 0",
            backgroundColor: "#fff",
            height: "100%",
            borderRadius: "10px",
            position: "relative",
            top: "30px",
            padding: 35,
          }}
        >
          {Show()}
        </Typography>
      </Container>
    </Fragment>
  );
};

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
