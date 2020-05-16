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
      levelOne = "shy";
      break;
    case 3:
      levelOne = "happy";
      break;
    case 4:
      levelOne = "smile";
      break;
    case 5:
      levelOne = "impulsiveness";
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
  }
  return levelTwo;
};

const Form = () => {
  const [view, setView] = useState("default");
  const [motherName, setMotherName] = useState("");
  const [childName, setChildName] = useState("");
  const [recording, setRecording] = useState({
    activity: {
      isHigh: null,
      ans: {
        one: null,
        two: null,
      },
    },
    shy: {
      isHigh: null,
      ans: {
        one: null,
        two: null,
      },
    },
    happy: {
      isHigh: null,
      ans: {
        one: null,
        two: null,
      },
    },
    smile: {
      isHigh: null,
      ans: {
        one: null,
        two: null,
      },
    },
    impulsiveness: {
      isHigh: null,
      ans: {
        one: null,
        two: null,
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
        setView("stepOne");
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
    if (recording.shy.isHigh === null) {
      setQuestionTwoError(true);
    } else {
      setQuestionTwoError(false);
      submitQuestion(2);
    }
  };
  const [questionThreeError, setQuestionThreeError] = useState(false);
  const questionThreeNext = () => {
    if (recording.happy.isHigh === null) {
      setQuestionThreeError(true);
    } else {
      setQuestionThreeError(false);
      submitQuestion(3);
    }
  };
  const [questionFourError, setQuestionFourError] = useState(false);
  const questionFourNext = () => {
    if (recording.smile.isHigh === null) {
      setQuestionFourError(true);
    } else {
      setQuestionFourError(false);
      submitQuestion(4);
    }
  };
  const [questionFiveError, setQuestionFiveError] = useState(false);
  const questionFiveNext = () => {
    if (recording.impulsiveness.isHigh === null) {
      setQuestionFiveError(true);
    } else {
      setQuestionFiveError(false);
      submitQuestion(5);
    }
  };
  const QuestionOne = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第三週-憤怒/挫折感
        </div>
        <div className="error">
          {questionOneError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子憤怒/挫折感為*</FormLabel>
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
          第三週-感官不適度
        </div>
        <div className="error">
          {questionTwoError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子感官不適度為*</FormLabel>
          <RadioGroup
            aria-label="shy"
            name="shy"
            value={recording.shy.isHigh}
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
          第三週-易被撫慰度
        </div>
        <div className="error">
          {questionThreeError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子易被撫慰度為*</FormLabel>
          <RadioGroup
            aria-label="happy"
            name="happy"
            value={recording.happy.isHigh}
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

  const QuestionFour = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第三週-害怕
        </div>
        <div className="error">
          {questionFourError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子害怕為*</FormLabel>
          <RadioGroup
            aria-label="smile"
            name="smile"
            value={recording.smile.isHigh}
            onChange={(e) => recordSection(4, e.target.value)}
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
          onClick={questionFourNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionFive = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第三週-憂傷
        </div>
        <div className="error">
          {questionFiveError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子憂傷為*</FormLabel>
          <RadioGroup
            aria-label="impulsiveness"
            name="impulsiveness"
            value={recording.impulsiveness.isHigh}
            onChange={(e) => recordSection(5, e.target.value)}
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
          onClick={questionFiveNext}
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
      recording.activity.ans.two === null
    ) {
      setQuestionOneDetailError(true);
    } else {
      setQuestionOneDetailError(false);
      setView("stepTwo");
    }
  };

  const [questionTwoDetailError, setQuestionTwoDetailError] = useState(false);

  const questionTwoDetailNext = () => {
    if (recording.shy.ans.one === null || recording.shy.ans.two === null) {
      setQuestionTwoDetailError(true);
    } else {
      setQuestionTwoDetailError(false);
      setView("stepThree");
    }
  };

  const [questionThreeDetailError, setQuestionThreeDetailError] = useState(
    false
  );

  const questionThreeDetailNext = () => {
    if (recording.happy.ans.one === null || recording.happy.ans.two === null) {
      setQuestionThreeDetailError(true);
    } else {
      setQuestionThreeDetailError(false);
      setView("stepFour");
    }
  };

  const [questionFourDetailError, setQuestionFourDetailError] = useState(false);

  const questionFourDetailNext = () => {
    if (recording.smile.ans.one === null || recording.smile.ans.two === null) {
      setQuestionFourDetailError(true);
    } else {
      setQuestionFourDetailError(false);
      setView("stepFive");
    }
  };

  const [questionFiveDetailError, setQuestionFiveDetailError] = useState(false);

  const questionFiveDetailNext = () => {
    if (
      recording.impulsiveness.ans.one === null ||
      recording.impulsiveness.ans.two === null
    ) {
      setQuestionFiveDetailError(true);
    } else {
      setQuestionFiveDetailError(false);
      setView("seeResult");
    }
  };

  const QuestionOneYDetail = () => {
    return (
      <div>
        <div>第三週-憤怒/挫折感高</div>
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
                憤怒／挫折感較高的孩子，沒順他的意、找不到想玩的東西、禁止他想做的事、中斷他正在做的事、叫他去睡覺時，都很容易表現出生氣、受挫的情緒。*
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
                面對孩子的挫折，要直接指責，告訴他哪裡做不好，並透過「你才試一次就放棄！」來刺激他。*
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
        <div>第三週-憤怒/挫折感低</div>
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
                憤怒／挫折感較低的孩子，沒順他的意、找不到想玩的東西、禁止他想做的事、中斷他正在做的事、叫他去睡覺時，較不會表現出生氣、受挫的情緒。*
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
                孩子較不會憤怒、挫折這是最好的，不要特別去教他如何增進情緒的認識。*
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
        <div>第三週-感官不適度高</div>
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
                感官不適度高的孩子，較容易被疼痛所困擾，易因為小小的割傷或瘀青就大哭，或是身體不小心被弄濕一點點，亦或者感覺到有點冷或生病的時候，就會反覆向父母抱怨。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.shy.ans.one}
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
                對於感官不適度高的孩子，可適度調整環境或刺激，讓孩子感到舒適。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.shy.ans.two}
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
        <div>第三週-感官不適度低</div>
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
                感官不適度低的孩子，較不易被疼痛所困擾，也不會因為小小的割傷或瘀青就大哭，同樣即使身體不小心被弄濕，亦或者感覺到有點冷或生病的時候，也不會反覆向父母抱怨。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.shy.ans.one}
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
                這樣的孩子對於自己受傷、不舒服較不會主動向父母說，因此父母會需要多花些心力適當留意孩子所發生的事情、身體狀況等，以給予幫助。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.shy.ans.two}
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
        <div>第三週-易被撫慰度高</div>
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
                易被撫慰度高的孩子，對於生氣心煩難過的情緒都比較容易安撫、不會持續太久，所以在他心煩難過時完全不用特別去理會他。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.happy.ans.one}
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
                父母敏於覺察孩子的情緒反應，即使孩子情緒過了，也可以試著聽聽孩子的想法，跟孩子討論他的心情。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.happy.ans.two}
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
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionThreeDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionThreeNDetail = () => {
    return (
      <div>
        <div>第三週-易被撫慰度低</div>
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
                易被撫慰度低的孩子，生氣心煩難過的情緒會持續十分鐘或更久，所以在他生氣心煩時應該要特別斥責他。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.happy.ans.one}
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
                孩子正在經歷情緒的當下，可以先引領孩子離開情緒的現場，並試著理解孩子的感覺。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.happy.ans.two}
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
        </ul>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={questionThreeDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionFourYDetail = () => {
    return (
      <div>
        <div>第三週-害怕高</div>
        <div className="error">
          {questionFourDetailError ? "請選擇必選欄位" : ""}
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
                害怕程度較高的孩子，時常會因為一些事物而感到害怕，像是怕黑、怕火、怕大聲，也會害怕小偷、電視上的怪物、或是想像中惡魔等。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.smile.ans.one}
              onChange={(e) => record(4, 1, e.target.value)}
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
                當孩子感到害怕時，一定要告訴他們「要勇敢一點」、「這沒什麼好怕的」、「你想太多了」，訓練他的勇氣。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.smile.ans.two}
              onChange={(e) => record(4, 2, e.target.value)}
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
          onClick={questionFourDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionFourNDetail = () => {
    return (
      <div>
        <div>第三週-害怕低</div>
        <div className="error">
          {questionFourDetailError ? "請選擇必選欄位" : ""}
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
                害怕程度較低的孩子，較不會因為一些事物而感到害怕，像是不怕黑、不怕火、也怕大聲，也不會對小偷、電視上的怪物、或是想像中惡魔等感到害怕。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.smile.ans.one}
              onChange={(e) => record(4, 1, e.target.value)}
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
                孩子什麼都不怕，是最好不過了，也更不用擔心他是否會遭受到什麼危險。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.smile.ans.two}
              onChange={(e) => record(4, 2, e.target.value)}
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
          onClick={questionFourDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionFiveYDetail = () => {
    return (
      <div>
        <div>第三週-憂傷高</div>
        <div className="error">
          {questionFiveDetailError ? "請選擇必選欄位" : ""}
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
                憂傷分數較高的孩子，容易因無法完成某些事的時候、原定的計畫未實現、喜歡的親戚朋友要離開、心愛的玩具不見或壞掉…等，感到氣餒、傷心與難過。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.impulsiveness.ans.one}
              onChange={(e) => record(5, 1, e.target.value)}
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
                父母應善用觀察力，仔細解讀孩子真正的感受，不要急著講道理，可以試著說出孩子目前的感受，也可以給他一些支持與鼓勵，讓孩子感受到被接納與支持，並讓情緒進一步得到舒緩。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.impulsiveness.ans.two}
              onChange={(e) => record(5, 2, e.target.value)}
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
          onClick={questionFiveDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionFiveNDetail = () => {
    return (
      <div>
        <div>第三週-憂傷低</div>
        <div className="error">
          {questionFiveDetailError ? "請選擇必選欄位" : ""}
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
                憂傷分數較低的孩子，不易因無法完成某些事的時候、原定的計畫未實現、喜歡的親戚朋友要離開、心愛的玩具不見或壞掉…等，感到氣餒、傷心與難過。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.impulsiveness.ans.one}
              onChange={(e) => record(5, 1, e.target.value)}
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
                父母應適時肯定孩子不易傷心、難過，但並非強調只能有正向情緒而不可以有負向情緒，若是孩子不懂或不願表現負向情緒，父母應適時展現對於負向情緒的接納，引導孩子說出心中的感受，不要隱藏委屈。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.impulsiveness.ans.two}
              onChange={(e) => record(5, 2, e.target.value)}
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
          onClick={questionFiveDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const Result = () => {
    const res = recording;
    // const res = {
    //   activity: {
    //     isHigh: "Y",
    //     ans: {
    //       one: "Y",
    //       two: "Y",
    //     },
    //   },
    //   shy: {
    //     isHigh: "Y",
    //     ans: {
    //       one: "Y",
    //       two: "Y",
    //     },
    //   },
    //   happy: {
    //     isHigh: "Y",
    //     ans: {
    //       one: "Y",
    //       two: "Y",
    //     },
    //   },
    //   smile: {
    //     isHigh: "Y",
    //     ans: {
    //       one: "Y",
    //       two: "Y",
    //     },
    //   },
    //   impulsiveness: {
    //     isHigh: "Y",
    //     ans: {
    //       one: "Y",
    //       two: "Y",
    //     },
    //   },
    //   approach: {
    //     isHigh: "Y",
    //     ans: {
    //       one: "Y",
    //       two: "Y",
    //     },
    //   },
    // };
    return (
      <div>
        <div>測驗結果</div>
        {res.activity.isHigh === "Y" ? (
          <Fragment>
            <div>第三週-憤怒/挫折感高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    憤怒／挫折感較高的孩子，沒順他的意、找不到想玩的東西、禁止他想做的事、中斷他正在做的事、叫他去睡覺時，都很容易表現出生氣、受挫的情緒。
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
                    面對孩子的挫折，要直接指責，告訴他哪裡做不好，並透過「你才試一次就放棄！」來刺激他。
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
            </ul>

            <Divider style={{ margin: "15px 0" }} />
          </Fragment>
        ) : (
          <Fragment>
            <div>第三週-憤怒/挫折感低</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    憤怒／挫折感較低的孩子，沒順他的意、找不到想玩的東西、禁止他想做的事、中斷他正在做的事、叫他去睡覺時，較不會表現出生氣、受挫的情緒。
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
                    孩子較不會憤怒、挫折這是最好的，不要特別去教他如何增進情緒的認識。
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
            </ul>
          </Fragment>
        )}
        <Divider style={{ margin: "15px 0" }} />
        {res.shy.isHigh === "Y" ? (
          <Fragment>
            <div>第三週-感官不適度高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    感官不適度高的孩子，較容易被疼痛所困擾，易因為小小的割傷或瘀青就大哭，或是身體不小心被弄濕一點點，亦或者感覺到有點冷或生病的時候，就會反覆向父母抱怨。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.shy.ans.one}
                  onChange={(e) => record(2, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.shy.ans.one === "Y"
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
                      res.shy.ans.one === "N"
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
                    對於感官不適度高的孩子，可適度調整環境或刺激，讓孩子感到舒適。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.shy.ans.two}
                  onChange={(e) => record(2, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.shy.ans.two === "Y"
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
                      res.shy.ans.two === "N"
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
            <div>第三週-感官不適度低</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    感官不適度低的孩子，較不易被疼痛所困擾，也不會因為小小的割傷或瘀青就大哭，同樣即使身體不小心被弄濕，亦或者感覺到有點冷或生病的時候，也不會反覆向父母抱怨。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.shy.ans.one}
                  onChange={(e) => record(2, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.shy.ans.one === "Y"
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
                      res.shy.ans.one === "N"
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
                    這樣的孩子對於自己受傷、不舒服較不會主動向父母說，因此父母會需要多花些心力適當留意孩子所發生的事情、身體狀況等，以給予幫助。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.shy.ans.two}
                  onChange={(e) => record(2, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.shy.ans.two === "Y"
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
                      res.shy.ans.two === "N"
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

        {res.happy.isHigh === "Y" ? (
          <Fragment>
            <div>第三週-易被撫慰度高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    易被撫慰度高的孩子，對於生氣心煩難過的情緒都比較容易安撫、不會持續太久，所以在他心煩難過時完全不用特別去理會他。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.happy.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.happy.ans.one === "Y"
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
                      res.happy.ans.one === "N"
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
                    父母敏於覺察孩子的情緒反應，即使孩子情緒過了，也可以試著聽聽孩子的想法，跟孩子討論他的心情。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.happy.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.happy.ans.two === "Y"
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
                      res.happy.ans.two === "N"
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
            <div>第三週-易被撫慰度低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    易被撫慰度低的孩子，生氣心煩難過的情緒會持續十分鐘或更久，所以在他生氣心煩時應該要特別斥責他。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.happy.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.happy.ans.one === "Y"
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
                      res.happy.ans.one === "N"
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
                    孩子正在經歷情緒的當下，可以先引領孩子離開情緒的現場，並試著理解孩子的感覺。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.happy.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.happy.ans.two === "Y"
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
                      res.happy.ans.two === "N"
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

        {res.smile.isHigh === "Y" ? (
          <Fragment>
            <div>第三週-害怕高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    害怕程度較高的孩子，時常會因為一些事物而感到害怕，像是怕黑、怕火、怕大聲，也會害怕小偷、電視上的怪物、或是想像中惡魔等。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.smile.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.smile.ans.one === "Y"
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
                      res.smile.ans.one === "N"
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
                    當孩子感到害怕時，一定要告訴他們「要勇敢一點」、「這沒什麼好怕的」、「你想太多了」，訓練他的勇氣。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.smile.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.smile.ans.two === "Y"
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
                      res.smile.ans.two === "N"
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
            <div>第三週-害怕低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    害怕程度較低的孩子，較不會因為一些事物而感到害怕，像是不怕黑、不怕火、也怕大聲，也不會對小偷、電視上的怪物、或是想像中惡魔等感到害怕。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.smile.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.smile.ans.one === "Y"
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
                      res.smile.ans.one === "N"
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
                    孩子什麼都不怕，是最好不過了，也更不用擔心他是否會遭受到什麼危險。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.smile.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.smile.ans.two === "Y"
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
                      res.smile.ans.two === "N"
                        ? { margin: "5px 0px", background: right }
                        : { margin: "5px 0px" }
                    }
                  />
                </RadioGroup>
              </FormControl>
            </ul>
          </Fragment>
        )}

        <Divider style={{ margin: "15px 0" }} />

        {res.impulsiveness.isHigh === "Y" ? (
          <Fragment>
            <div>第三週-憂傷高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    憂傷分數較高的孩子，容易因無法完成某些事的時候、原定的計畫未實現、喜歡的親戚朋友要離開、心愛的玩具不見或壞掉…等，感到氣餒、傷心與難過。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.impulsiveness.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.impulsiveness.ans.one === "Y"
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
                      res.impulsiveness.ans.one === "N"
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
                    父母應善用觀察力，仔細解讀孩子真正的感受，不要急著講道理，可以試著說出孩子目前的感受，也可以給他一些支持與鼓勵，讓孩子感受到被接納與支持，並讓情緒進一步得到舒緩。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.impulsiveness.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.impulsiveness.ans.two === "Y"
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
                      res.impulsiveness.ans.two === "N"
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
            <div>第三週-憂傷低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    憂傷分數較低的孩子，不易因無法完成某些事的時候、原定的計畫未實現、喜歡的親戚朋友要離開、心愛的玩具不見或壞掉…等，感到氣餒、傷心與難過。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.impulsiveness.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.impulsiveness.ans.one === "Y"
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
                      res.impulsiveness.ans.one === "N"
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
                    父母應適時肯定孩子不易傷心、難過，但並非強調只能有正向情緒而不可以有負向情緒，若是孩子不懂或不願表現負向情緒，父母應適時展現對於負向情緒的接納，引導孩子說出心中的感受，不要隱藏委屈。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.impulsiveness.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.impulsiveness.ans.two === "Y"
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
                      res.impulsiveness.ans.two === "N"
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

  const request = () => {
    const data = {
      date: moment().format("YYYY-MM-DD"),
      mother: motherName,
      child: childName,
      activity: recording.activity.isHigh ? "高" : "低",
      activityOne: recording.activity.ans.one,
      activityTwo: recording.activity.ans.two,
      shy: recording.shy.isHigh ? "高" : "低",
      shyOne: recording.shy.ans.one,
      shyTwo: recording.shy.ans.two,
      happy: recording.happy.isHigh ? "高" : "低",
      happyOne: recording.happy.ans.one,
      happyTwo: recording.happy.ans.two,
      smile: recording.smile.isHigh ? "高" : "低",
      smileOne: recording.smile.ans.one,
      smileTwo: recording.smile.ans.two,
      impulsiveness: recording.impulsiveness.isHigh ? "高" : "低",
      impulsivenessOne: recording.impulsiveness.ans.one,
      impulsivenessTwo: recording.impulsiveness.ans.two,
    };

    $.ajax({
      type: "get",
      url:
        "https://script.google.com/macros/s/AKfycbxJSjLoT1mjh9TifuUPz37N3hH_NTmzdrmPWSkz1y2uv09DkVE8/exec",
      data: data,
      dataType: "JSON",
      success: function (response) {
        console.log("scucess");
      },
    });
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
      case "activityYDetail":
        return QuestionOneYDetail();
        break;
      case "activityNDetail":
        return QuestionOneNDetail();
        break;
      case "stepTwo":
        return QuestionTwo();
        break;
      case "shyYDetail":
        return QuestionTwoYDetail();
        break;
      case "shyNDetail":
        return QuestionTwoNDetail();
        break;
      case "stepThree":
        return QuestionThree();
        break;
      case "happyYDetail":
        return QuestionThreeYDetail();
        break;
      case "happyNDetail":
        return QuestionThreeNDetail();
        break;
      case "stepFour":
        return QuestionFour();
        break;
      case "smileYDetail":
        return QuestionFourYDetail();
        break;
      case "smileNDetail":
        return QuestionFourNDetail();
        break;
      case "stepFive":
        return QuestionFive();
        break;
      case "impulsivenessYDetail":
        return QuestionFiveYDetail();
        break;
      case "impulsivenessNDetail":
        return QuestionFiveNDetail();
        break;
      case "seeResult":
        request();
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
