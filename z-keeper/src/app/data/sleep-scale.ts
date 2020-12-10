export class SleepScale {
	public static ScaleValues = [
    {
      value: 1,
      text: 'Feeling active, vital, alert, or wide awake',
      color: "secondary",
    },
    {
      value: 2,
      text: 'Functioning at high levels, but not at peak; able to concentrate',
      color: "secondary",
    },
    {
      value: 3,
      text: 'Awake, but relaxed; responsive but not fully alert',
      color: "primary",
    },
    {
      value: 4,
      text: 'Somewhat foggy, let down',
      color: "warning",
    },
    {
      value: 5,
      text:
      'Foggy; losing interest in remaining awake; slowed down',
      color: "warning",
    },
    {
      value: 6,
      text: 'Sleepy, woozy, fighting sleep; prefer to lie down',
      color: "danger",
    },
    {
      value: 7,
      text:
      'No longer fighting sleep, sleep onset soon; having dream-like thoughts',
      color: "danger",
    },
	];
	 
	private loggedValue:number;

	constructor(loggedValue:number, ) {
		this.loggedValue = loggedValue;
	}

	summaryString():string {
		return this.loggedValue + ": " + SleepScale.ScaleValues[this.loggedValue];
	}
}
