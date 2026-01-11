import { YTVideoBackgroundConfig } from './types';
export declare class YTVideoBackground {
    private config;
    private player;
    private parentElement;
    private playerElement;
    private videoElement;
    constructor(userConfig: YTVideoBackgroundConfig);
    private updateConfig;
    private addYTScript;
    private createElements;
    private setupEvents;
    private onYouTubeIframeAPIReady;
    private fetchSize;
    private calculateSize;
    private getSize;
    private recalculateSize;
    private onPlayerReady;
    private onResize;
    private applyStyles;
}
