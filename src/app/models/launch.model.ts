export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    rocket: {
        rocket_name: string;
        rocket_type: string;
        first_stage: {
            cores: {
                land_success: boolean | null;
            }[];
        };
    };
    links: {
        mission_patch_small: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
    };
    launch_site: {
        site_id: string;
        site_name: string
        site_name_long: string
    }
    launch_success: boolean
}
