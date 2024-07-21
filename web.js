const meetingCodes = {
    meetingCode1: 'tpr-msju-fra',
    meetingCode2: 'vdd-dvup-csh',
    meetingCode3: 'ako-wtqv-sso',
    meetingCode4: 'hzr-tzwe-obh',
    meetingCode5: 'ttp-fpbe-yne',
    meetingCode6: 'urw-aetb-uux'
};
function joinMeetingg(meetingCodeKey) {
    const meetingCode = meetingCodes[meetingCodeKey];
    const meetUrl = `https://meet.google.com/${meetingCode}`;
    window.open(meetUrl, '_blank');
}