// https://discord.com/developers/docs/resources/user#user-object
import { Client } from "../../Client.ts";
import { Snowflake } from "../../../util/Snowflake.ts";
import {Guild, Channel, GuildMember, Presence, Voice, Emoji, Role} from "../../interfaces/interface_export.ts"

export class GuildStruct {
  public id: string;
  public name: string;
  public icon: string | null = null;
  public splash: string | null = null;
  public discoverySplash: string | null = null;
  public owner?: boolean = false;
  public ownerID!: string;
  public permissions?: number;
  public region: string;
  public afkChannelID: string | null = null
  public afkTimeout: number;
  public embedEnabled?: boolean = false;
  public embedChannelID?: string | null = null;
  public verificationLevel: number;
  public defaultMessageNotifications: number;
  public explicitContentFilter: number;
  public roles: Array<Role>;
  public emojis: Array<Emoji>;
  public features: Array<string>;
  public mfaLevel: number;
  public applicationID: string | null = null;
  public widgetEnabled?: boolean = false;
  public widgetChannelID?: string | null = null;
  public systemChannelID: string;
  public systemChannelFlags: number;
  public rulesChannelID: string | null = null;
  public joinedAt?: string;
  public large?: boolean = false;
  public unavailable?: boolean = false;
  public memberCount?: number;
  public voiceStates?: Array<Voice>;
  public members?: Array<GuildMember>;
  public channels?: Array<Channel>;
  public presences?: Array<Presence>;
  public maxPresences?: number | null = null;
  public maxMembers?: number;
  public vanityURLCode: string | null = null;
  public description: string | null = null;
  public banner: string| null = null;
  public premiumTier: number;
  public premiumSubscriptionCount?: number;
  public preferredLocale: string;
  public publicUpdatesChannelID: string | null = null;
  public maxVideoChannelUsers?: number;
  public approximateMemberCount?: number;
  public approximatePresenceCount?: number;

  constructor(private payload: Guild) {
    this.id = this.payload.id;
    this.name = this.payload.name;
    this.icon = this.payload.icon
    this.splash = this.payload.splash;
    this.discoverySplash = this.payload.discovery_splash;
    this.owner = this.payload.owner;
    this.region = this.payload.region;
    this.afkChannelID = this.payload.afk_channel_id;
    this.afkTimeout = this.payload.afk_timeout;
    this.embedEnabled = this.payload.embed_enabled;
    this.embedChannelID = this.payload.embed_channel_id;
    this.verificationLevel = this.payload.verification_level;
    this.defaultMessageNotifications =
    this.payload.default_message_notifications;
    this.explicitContentFilter = this.payload.explicit_content_filter;
    this.roles = this.payload.roles;
    this.emojis = this.payload.emojis;
    this.features = this.payload.features;
    this.mfaLevel = this.payload.mfa_level;
    this.applicationID = this.payload.application_id;
    this.widgetEnabled = this.payload.widget_enabled;
    this.widgetChannelID = this.payload.widget_channel_id;
    this.systemChannelID = this.payload.system_channel_id;
    this.systemChannelFlags = this.payload.system_channel_flags;
    this.rulesChannelID = this.payload.rules_channel_id;
    this.joinedAt = this.payload.joined_at;
    this.large = this.payload.large;
    this.unavailable = this.payload.unavailable
    this.memberCount = this.payload.member_count;
    this.voiceStates = this.payload.voice_states;
    this.members = this.payload.members;
    this.channels = this.payload.channels;
    this.presences = this.payload.presences;
    this.maxPresences = this.payload.max_presences;
    this.maxMembers = this.payload.max_members;
    this.vanityURLCode = this.payload.vanity_url_code;
    this.description = this.payload.description;
    this.banner = this.payload.banner;
    this.premiumTier = this.payload.premium_tier;
    this.premiumSubscriptionCount = this.payload.premium_subscription_count;
    this.preferredLocale = this.payload.preferred_locale;
    this.publicUpdatesChannelID = this.payload.public_updates_channel_id;
    this.maxVideoChannelUsers = this.payload.max_video_channel_users;
    this.approximateMemberCount = this.payload.approximate_member_count;
    this.approximatePresenceCount = this.payload.approximate_presence_count;
  }

  get createdTimestamp() {
    return Snowflake.parse(this.id).timestamp;
  }

  get createdOn() {
    return new Date(this.createdTimestamp);
  }

  get joinedOn() {
    return new Date(
      new Date(this.joinedAt ? new Date(this.joinedAt).getTime() : ""),
    );
  }
}
