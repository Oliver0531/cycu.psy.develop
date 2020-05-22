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
    case 6:
      levelOne = "approach";
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
    approach: {
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
  const [questionSixError, setQuestionSixError] = useState(false);
  const questionSixNext = () => {
    if (recording.approach.isHigh === null) {
      setQuestionSixError(true);
    } else {
      setQuestionSixError(false);
      submitQuestion(6);
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
          第二週-羞怯
        </div>
        <div className="error">
          {questionTwoError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子羞怯為*</FormLabel>
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
          第二週-高強度快活感
        </div>
        <div className="error">
          {questionThreeError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子高強度快活感為*</FormLabel>
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
          第二週-微笑
        </div>
        <div className="error">
          {questionFourError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子微笑為*</FormLabel>
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
          第二週-衝動性
        </div>
        <div className="error">
          {questionFiveError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子衝動性為*</FormLabel>
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

  const QuestionSix = () => {
    return (
      <div>
        <div className="title" style={{ fontSize: 20 }}>
          第二週-趨近性/(正向)期望
        </div>
        <div className="error">
          {questionFiveError ? "請選擇必選欄位*" : null}
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">您的孩子趨近性為*</FormLabel>
          <RadioGroup
            aria-label="approach"
            name="approach"
            value={recording.approach.isHigh}
            onChange={(e) => recordSection(6, e.target.value)}
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
          onClick={questionSixNext}
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
      setView("stepSix");
    }
  };

  const [questionSixDetailError, setQuestionSixDetailError] = useState(false);

  const questionSixDetailNext = () => {
    if (
      recording.approach.ans.one === null ||
      recording.approach.ans.two === null
    ) {
      setQuestionSixDetailError(true);
    } else {
      setQuestionSixDetailError(false);
      setView("seeResult");
    }
  };

  const QuestionOneYDetail = () => {
    return (
      <div>
        <div>第二週-活動量高</div>
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
                活動量太高的孩子，常常嘰嘰喳喳吵個不停，所以活動量高就是不好的氣質*
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
                孩子常跑來跑去，或吃飯離開座位等，並非他故意搗蛋，但可適當宣洩、再約束其天生氣質使然的高活動量。*
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
        <div>第二週-羞怯高</div>
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
                羞怯高的孩子在陌生人群中行為顯得緊張，較無法自在與人相處，即便是跟認識很久的人在一起也會感到害羞*
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
                即便孩子不願意接觸人，也一定要帶他四處結交其他的朋友，一定要不斷要求他主動認識越多人越好，不然長大之後可能會沒有交友的能力。*
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
        <div>第二週-羞怯低</div>
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
                羞怯低的孩子幾乎能自在地與任何人相處，在陌生的人群中也不會害羞，也可以自在地邀請別的小孩一起玩。*
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
                因為孩子可自在接觸人群，為了避免孩子暴露於人際危險中，一定要時時刻刻要求孩子在陌生人群中表現出害羞。*
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
        <div>第二週-高強度快活感得分高</div>
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
                高強度快活感得分高的孩子，傾向選擇具有刺激或冒險性或享受於激烈的遊戲方式。*
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
                對於高強度快活感得分高的孩子，父母應試著了解他的氣質與特性，並注意孩子的遊戲安全問題，但非全然制止孩子進行此類遊戲。*
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
        <div>第二週-高強度快活感得分低</div>
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
                高強度快活感得分低的孩子，較不會選擇具有刺激或冒險性或享受於激烈的遊戲方式。*
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
                對於高強度快活感得分低的孩子，父母應試著了解他的氣質與特性，接納孩子所喜愛的玩法，但不強迫孩子一定要按照甚麼樣的方式遊戲。*
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
        <div>第二週-微笑高</div>
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
                微笑較高的孩子，常對他喜歡的人笑，自己玩的時候、看有趣的故事、電視或電影時、和其他小朋友玩時候，常常開心笑，或笑得很大聲。*
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
                對於微笑較高的孩子，需要提醒孩子覺察自身情緒與環境之關係，若因孩子表達正向情緒，受到外界不當回應而受傷時，父母要特別用心去發覺，並引導他向傷害他的人表達內心的感受。*
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
        <div>第二週-微笑低</div>
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
                微笑較低的孩子，不常對他喜歡的人笑，自己玩的時候、看有趣的故事、電視或電影時，以及和其他小朋友玩的時候，較少開心笑，也不會笑得很大聲。*
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
                對於微笑較低的孩子，需提醒孩子適切表達微笑開心情緒，若因孩子表達過於微弱之正向情緒，受到外界不當回應而受傷時，父母要特別用心去發覺，並引導他向傷害他的人表達內心的感受。*
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
        <div>第二週-衝動性高</div>
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
                衝動性高的孩子經常很快地開始進行或嘗試一個活動，對於想要做的事情或說的話會直接做或直接脫口而出，較少停下來思考或等待。*
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
                衝動性太高的孩子若莽撞或衝動地做出一件事情或行為，可能引發他人的不舒服或造成負向的結果，可適度引導孩子先暫停一下，思考可能發生什麼事情，若孩子未能述說出來時，父母可引導或幫他說出來。*
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
        <div>第二週-衝動性低</div>
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
                衝動性低的孩子經常需要花一段長時間才會嘗試一個活動，通常不會急著做決定或急著開始。*
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
                當衝動性較低的孩子經常需要一些時間思考、做事情的速度可能會較慢，父母若能適時等待、理解與同理孩子的反應與感受，以協助他融入活動或接觸環境。*
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

  const QuestionSixYDetail = () => {
    return (
      <div>
        <div>第二週-趨近性高</div>
        <div className="error">
          {questionSixDetailError ? "請選擇必選欄位" : ""}
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
                趨近性/(正向)期望較高的孩子，對於自己期待中、感興趣的事情非常具有熱忱*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.approach.ans.one}
              onChange={(e) => record(6, 1, e.target.value)}
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
                一旦孩子過於興奮，而無法控制因興奮而表現的干擾行為，父母可適時予以提醒與限制，告知孩子太興奮、坐不住，都會影響後續的事件發展、對周遭人事物造成困擾，更可能忽略自身週遭的危險情境。
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.approach.ans.two}
              onChange={(e) => record(6, 2, e.target.value)}
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
          onClick={questionSixDetailNext}
        >
          下一步
        </Button>
      </div>
    );
  };

  const QuestionSixNDetail = () => {
    return (
      <div>
        <div>第二週-趨近性低</div>
        <div className="error">
          {questionSixDetailError ? "請選擇必選欄位" : ""}
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
                趨近性/(正向)期望較低的孩子，對於自己期待中、感興趣的事情不會表現得非常具有熱忱*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="one"
              name="one"
              value={recording.approach.ans.one}
              onChange={(e) => record(6, 1, e.target.value)}
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
                一旦孩子過於平靜，而無法適時展現正向期望情緒而表現得過於冷淡，父母可適時予以提醒與告知，如果孩子太平靜，可能會失去後續的事件正向發展機會、對周遭人事物形成距離感，因而錯失原本期待中的事物。*
              </li>
            </FormLabel>
            <RadioGroup
              aria-label="two"
              name="two"
              value={recording.approach.ans.two}
              onChange={(e) => record(6, 2, e.target.value)}
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
          onClick={questionSixDetailNext}
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
            <div>第二週-活動量高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    活動量太高的孩子，常常嘰嘰喳喳吵個不停，所以活動量高就是不好的氣質
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
                    孩子常跑來跑去，或吃飯離開座位等，並非他故意搗蛋，但可適當宣洩、再約束其天生氣質使然的高活動量。
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
            </ul>
          </Fragment>
        )}
        <Divider style={{ margin: "15px 0" }} />
        {res.shy.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-羞怯高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    羞怯高的孩子在陌生人群中行為顯得緊張，較無法自在與人相處，即便是跟認識很久的人在一起也會感到害羞。
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
                    即便孩子不願意接觸人，也一定要帶他四處結交其他的朋友，一定要不斷要求他主動認識越多人越好，不然長大之後可能會沒有交友的能力。
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
                      res.shy.ans.two === "N"
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
            <div>第二週-羞怯低</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    羞怯低的孩子幾乎能自在地與任何人相處，在陌生的人群中也不會害羞，也可以自在地邀請別的小孩一起玩。
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
                    因為孩子可自在接觸人群，為了避免孩子暴露於人際危險中，一定要時時刻刻要求孩子在陌生人群中表現出害羞。
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
                      res.shy.ans.two === "N"
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

        {res.happy.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-高強度快活感</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    高強度快活感得分高的孩子，傾向選擇具有刺激或冒險性或享受於激烈的遊戲方式。
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
                      res.happy.ans.one === "N"
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
                    對於高強度快活感得分高的孩子，父母應試著了解他的氣質與特性，並注意孩子的遊戲安全問題，但非全然制止孩子進行此類遊戲。
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
            <div>第二週-高強度快活感</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    高強度快活感得分低的孩子，較不會選擇具有刺激或冒險性或享受於激烈的遊戲方式。
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
                      res.happy.ans.one === "N"
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
                    對於高強度快活感得分低的孩子，父母應試著了解他的氣質與特性，接納孩子所喜愛的玩法，但不強迫孩子一定要按照甚麼樣的方式遊戲。
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
            <div>第二週-微笑</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    微笑較高的孩子，常對他喜歡的人笑，自己玩的時候、看有趣的故事、電視或電影時、和其他小朋友玩時候，常常開心笑，或笑得很大聲。
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
                    對於微笑較高的孩子，需要提醒孩子覺察自身情緒與環境之關係，若因孩子表達正向情緒，受到外界不當回應而受傷時，父母要特別用心去發覺，並引導他向傷害他的人表達內心的感受。
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
                      res.smile.ans.two === "N"
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
            <div>第二週-微笑低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    微笑較低的孩子，不常對他喜歡的人笑，自己玩的時候、看有趣的故事、電視或電影時，以及和其他小朋友玩的時候，較少開心笑，也不會笑得很大聲。
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
                    對於微笑較低的孩子，需提醒孩子適切表達微笑開心情緒，若因孩子表達過於微弱之正向情緒，受到外界不當回應而受傷時，父母要特別用心去發覺，並引導他向傷害他的人表達內心的感受。
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
                      res.smile.ans.two === "N"
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

        {res.impulsiveness.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-衝動性高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    衝動性高的孩子經常很快地開始進行或嘗試一個活動，對於想要做的事情或說的話會直接做或直接脫口而出，較少停下來思考或等待。
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
                    衝動性太高的孩子若莽撞或衝動地做出一件事情或行為，可能引發他人的不舒服或造成負向的結果，可適度引導孩子先暫停一下，思考可能發生什麼事情，若孩子未能述說出來時，父母可引導或幫他說出來。
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
            <div>第二週-衝動性低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    衝動性低的孩子經常需要花一段長時間才會嘗試一個活動，通常不會急著做決定或急著開始。
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
                    當衝動性較低的孩子經常需要一些時間思考、做事情的速度可能會較慢，父母若能適時等待、理解與同理孩子的反應與感受，以協助他融入活動或接觸環境。
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

        <Divider style={{ margin: "15px 0" }} />

        {res.approach.isHigh === "Y" ? (
          <Fragment>
            <div>第二週-趨近性/(正向)期望高</div>
            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    趨近性/(正向)期望較高的孩子，對於自己期待中、感興趣的事情非常具有熱忱
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.approach.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.approach.ans.one === "Y"
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
                      res.approach.ans.one === "N"
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
                    一旦孩子過於興奮，而無法控制因興奮而表現的干擾行為，父母可適時予以提醒與限制，告知孩子太興奮、坐不住，都會影響後續的事件發展、對周遭人事物造成困擾，更可能忽略自身週遭的危險情境。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.approach.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.approach.ans.two === "Y"
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
                      res.approach.ans.two === "N"
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
            <div>第二週-趨近性/(正向)期望低</div>

            <ul>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <li
                    style={{
                      listStyleType: "decimal-leading-zero",
                      margin: "10px 0",
                    }}
                  >
                    趨近性/(正向)期望較低的孩子，對於自己期待中、感興趣的事情不會表現得非常具有熱忱
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="one"
                  name="one"
                  value={res.approach.ans.one}
                  onChange={(e) => record(3, 1, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.approach.ans.one === "Y"
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
                      res.approach.ans.one === "N"
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
                    一旦孩子過於平靜，而無法適時展現正向期望情緒而表現得過於冷淡，父母可適時予以提醒與告知，如果孩子太平靜，可能會失去後續的事件正向發展機會、對周遭人事物形成距離感，因而錯失原本期待中的事物。
                  </li>
                </FormLabel>
                <RadioGroup
                  aria-label="two"
                  name="two"
                  value={res.approach.ans.two}
                  onChange={(e) => record(3, 2, e.target.value)}
                >
                  <FormControlLabel
                    value="Y"
                    control={<Radio color="primary" />}
                    label="是"
                    disabled
                    style={
                      res.approach.ans.two === "Y"
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
                      res.approach.ans.two === "N"
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
      activity: recording.activity.isHigh === "Y" ? "高" : "低",
      activityOne: recording.activity.ans.one,
      activityTwo: recording.activity.ans.two,
      shy: recording.shy.isHigh === "Y" ? "高" : "低",
      shyOne: recording.shy.ans.one,
      shyTwo: recording.shy.ans.two,
      happy: recording.happy.isHigh === "Y" ? "高" : "低",
      happyOne: recording.happy.ans.one,
      happyTwo: recording.happy.ans.two,
      smile: recording.smile.isHigh === "Y" ? "高" : "低",
      smileOne: recording.smile.ans.one,
      smileTwo: recording.smile.ans.two,
      impulsiveness: recording.impulsiveness.isHigh === "Y" ? "高" : "低",
      impulsivenessOne: recording.impulsiveness.ans.one,
      impulsivenessTwo: recording.impulsiveness.ans.two,
      approach: recording.approach.isHigh === "Y" ? "高" : "低",
      approachOne: recording.approach.ans.one,
      approachTwo: recording.approach.ans.two,
    };

    $.ajax({
      type: "get",
      url:
        "https://script.google.com/macros/s/AKfycbxO_iTHQqcF4tpk2IqGM4qoMBT1nAZJZzCFw68l3bEAElKiw8rT/exec",
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
      case "stepSix":
        return QuestionSix();
        break;
      case "approachYDetail":
        return QuestionSixYDetail();
        break;
      case "approachNDetail":
        return QuestionSixNDetail();
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
