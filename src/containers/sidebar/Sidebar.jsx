import React, { useState } from "react";
import {
  formalAnalysisArr,
  formTypeArr,
  gameTypeArr,
  melodicElementArr,
  melodicMotiveArr,
  melodicRangeArr,
  meterArr,
  originArr,
  regionArr,
  rhythmicElementArr,
  scaleArr,
  schoolGradeLevelArr,
  songTypeArr,
  stateArr,
  subjectArr,
  tonalCenterArr,
  toneSetArr,
} from "../../utils/tagCategories";
import TagControls from "../../components/tagControls/TagControls.jsx";
const Sidebar = () => {
  const [songTags, setSongTags] = useState({
    origin: [],
    region: [],
    state: [],
    subject: [],
    songType: [],
    schoolGradeLevel: [],
    tonalCenter: [],
    scale: [],
    toneSet: [],
    melodicRange: [],
    melodicElement: [],
    melodicMotive: [],
    rhythmicElement: [],
    meter: [],
    formType: [],
    formalAnalysis: [],
    gameType: [],
  });
  const [songTagOptions, setSongTagOptions] = useState({
    origin: originArr,
    region: regionArr,
    state: stateArr,
    subject: subjectArr,
    songType: songTypeArr,
    schoolGradeLevel: schoolGradeLevelArr,
    tonalCenter: tonalCenterArr,
    scale: scaleArr,
    toneSet: toneSetArr,
    melodicRange: melodicRangeArr,
    melodicElement: melodicElementArr,
    melodicMotive: melodicMotiveArr,
    rhythmicElement: rhythmicElementArr,
    meter: meterArr,
    formType: formTypeArr,
    formalAnalysis: formalAnalysisArr,
    gameType: gameTypeArr,
  });

  const addToTags = (type, payload) => {
    setSongTags((songTags) => {
      let newObj = { ...songTags };
      newObj[type] = [...songTags[type], payload];
      return Object.assign({ ...songTags }, newObj);
    });
  };

  const removeFromTags = (type, payload) => {
    setSongTags((songTags) => {
      let newObj = { ...songTags };
      newObj[type] = [...songTags[type]].filter((tag) => tag !== payload);
      return Object.assign({ ...songTags }, newObj);
    });
  };

  const handlers = { addToTags, removeFromTags };

  return (
    <div className="w-[400px] bg-gray-800 text-white flex flex-col justify-start pt-4 px-2 pb-8 overflow-y-scroll scrollbar-hide">
      <TagControls
        title="Origin"
        type="origin"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Region"
        type="region"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="State"
        type="state"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Subject"
        type="subject"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Song Type"
        type="songType"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="School Grade Level"
        type="schoolGradeLevel"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Tonal Center"
        type="tonalCenter"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Scale"
        type="scale"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Tone Set"
        type="toneSet"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Melodic Range"
        type="melodicRange"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Melodic Element"
        type="melodicElement"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Melodic Motive"
        type="melodicMotive"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Rhythmic Element"
        type="rhythmicElement"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Meter"
        type="meter"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Form Type"
        type="formType"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Formal Analysis"
        type="formalAnalysis"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
      <TagControls
        title="Game Type"
        type="gameType"
        songTags={songTags}
        songTagOptions={songTagOptions}
        handlers={handlers}
      />
    </div>
  );
};

export default Sidebar;
