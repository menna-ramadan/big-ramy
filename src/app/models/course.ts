export interface Course {
  id: number;
  type: string;
  attributes: {
    name: string;
    description: string;
    available_on: string;
    slug: string;
    meta_description: string;
    meta_keywords: string;
    updated_at: string;
    sku: any;
    public_metadata: {};
    purchasable: boolean;
    in_stock: boolean;
    backorderable: boolean;
    available: boolean;
    currency: string;
    price: number;
    display_price: string;
    compare_at_price: number;
    display_compare_at_price: string;
    product_type: string;
    avg_review: number;
    num_of_reviews: number;
    course: {
      type: string;
      course_id: number;
      title: string;
      description: string;
      image_url: string;
      product_id: number;
      video_url: string;
      video_ext: any;
      host_type: string;
      start_date: string;
      end_date: string;
      level: {
        value: string;
        translation: string;
      };
      availability: {
        value: string;
        translation: string;
      };
      sections_count: number;
      sessions_count: number;
      duration_in_hours: number;
      average_sessions_per_section: number;
      average_hours_per_session: number;
      number_of_objectives: number;
      first_section_and_session_ids: {
        first_section_id: number;
        first_course_session_id: number;
      };
      sections: [
        {
          section_id: number;
          course_id: number;
          title: string;
          position: number;
          is_posted: boolean;
          course_name: string;
          sessions: [
            {
              course_session_id: number;
              is_blocked: boolean;
              is_discussion_form_enabled: boolean;
              section_id: number;
              title: string;
              position: number;
              expected_time: number;
              expected_time_unit: string;
              content_type: string;
              content_type_display: string;
              hosted_video: any;
              text: any;
            },
            {
              course_session_id: number;
              is_blocked: boolean;
              is_discussion_form_enabled: boolean;
              section_id: number;
              title: string;
              position: number;
              expected_time: number;
              expected_time_unit: string;
              content_type: string;
              content_type_display: string;
              hosted_video: any;
              text: string;
            }
          ];
        },
        {
          section_id: number;
          course_id: number;
          title: string;
          position: number;
          is_posted: boolean;
          course_name: string;
          sessions: [
            {
              course_session_id: number;
              is_blocked: boolean;
              is_discussion_form_enabled: boolean;
              section_id: number;
              title: string;
              position: number;
              expected_time: number;
              expected_time_unit: string;
              content_type: string;
              content_type_display: string;
              hosted_video: any;
              text: string;
            }
          ];
        }
      ];
    };
    is_available_to_purchase: boolean;
    is_purchased_by_current_user: boolean;
    is_added_to_cart_by_current_user: boolean;
  };
  relationships: {
    variants: {
      data: [];
    };
    option_types: {
      data: [];
    };
    product_properties: {
      data: [];
    };
    taxons: {
      data: [
        {
          id: string;
          type: string;
        },
        {
          id: string;
          type: string;
        }
      ];
    };
    images: {
      data: [];
    };
    default_variant: {
      data: {
        id: string;
        type: string;
      };
    };
    primary_variant: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}
